/**
 * JSP SEGUROS · ENDPOINT SERVERLESS DE CONTACTO (RESEND)
 * Manejador seguro para Vercel Serverless Function
 *
 * Configuración:
 * - Remitente oficial: JSP Seguros <contacto@segurosjsp.com>
 * - Aviso a Jeanette: js0565330@gmail.com con Reply-To al visitante
 * - Confirmación al visitante: acuse de recibo profesional
 * - Clave API: RESEND_API_KEY (almacenada estrictamente en el entorno del servidor)
 */

// Memoria volátil para mitigar envíos duplicados / spam rápido
const recentSubmissions = new Map();

function cleanOldSubmissions() {
  const now = Date.now();
  for (const [key, timestamp] of recentSubmissions.entries()) {
    if (now - timestamp > 60000) {
      recentSubmissions.delete(key);
    }
  }
}

module.exports = async function handler(req, res) {
  // 1. Validar método HTTP
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      error: 'Método no permitido. Solo se acepta POST.'
    });
  }

  try {
    // 2. Parsear cuerpo de la solicitud
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { name, phone, email, subject, notes, _hp } = body;

    // 3. Trampa Honeypot contra bots de spam
    if (_hp && String(_hp).trim().length > 0) {
      // Retornar éxito aparente sin ejecutar envíos para engañar al bot
      return res.status(200).json({
        success: true,
        message: 'Solicitud procesada correctamente.'
      });
    }

    // 4. Validación de campos obligatorios
    const cleanName = String(name || '').trim();
    const cleanPhone = String(phone || '').trim();
    const cleanEmail = String(email || '').trim().toLowerCase();
    const cleanSubject = String(subject || 'Consulta General').trim();
    const cleanNotes = String(notes || '').trim();

    if (!cleanName || cleanName.length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Por favor, ingresa tu nombre completo.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        error: 'Por favor, ingresa una dirección de correo electrónico válida.'
      });
    }

    if (!cleanPhone || cleanPhone.length < 6) {
      return res.status(400).json({
        success: false,
        error: 'Por favor, ingresa un número de teléfono o WhatsApp válido.'
      });
    }

    // 5. Prevención de envíos duplicados inmediatos (ventana de 20 segundos)
    cleanOldSubmissions();
    const clientKey = `${cleanEmail}:${cleanSubject}`;
    const lastSent = recentSubmissions.get(clientKey);
    const now = Date.now();

    if (lastSent && (now - lastSent < 20000)) {
      return res.status(429).json({
        success: false,
        error: 'Ya hemos recibido tu solicitud hace unos instantes. Por favor, espera un momento antes de reenviar.'
      });
    }

    // 6. Validar presencia de la clave RESEND_API_KEY en el servidor
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('[Error Crítico] Variable de entorno RESEND_API_KEY no encontrada en el servidor.');
      return res.status(500).json({
        success: false,
        error: 'Error de configuración del servidor de correo. La clave de envío no está disponible.'
      });
    }

    // Fecha en hora chilena para el correo
    const fechaChile = new Date().toLocaleString('es-CL', {
      timeZone: 'America/Santiago',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    const SENDER_EMAIL = 'JSP Seguros <contacto@segurosjsp.com>';
    const JEANETTE_EMAIL = 'js0565330@gmail.com';

    // 7. Plantilla HTML 1: Aviso de nueva consulta para Jeanette Salinas Ponce
    const adminHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Nueva Consulta · JSP Seguros</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF8F5; margin: 0; padding: 24px; color: #152238;">
  <div style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 14px; border: 1px solid #EAE6DF; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.05);">
    
    <div style="background: linear-gradient(135deg, #006637 0%, #001651 100%); padding: 28px 32px; color: #FFFFFF;">
      <h1 style="margin: 0 0 6px; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;">JSP Seguros</h1>
      <p style="margin: 0; font-size: 13px; opacity: 0.9; text-transform: uppercase; letter-spacing: 0.05em;">Nueva Consulta Web Recibida</p>
    </div>

    <div style="padding: 32px;">
      <p style="font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
        Hola Jeanette, has recibido una nueva solicitud de asesoría a través de tu sitio web <strong>www.segurosjsp.com</strong>:
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
        <tr style="border-bottom: 1px solid #F0ECE4;">
          <td style="padding: 10px 0; font-weight: 700; color: #001651; width: 35%;">Nombre Completo:</td>
          <td style="padding: 10px 0; color: #2D3748;">${cleanName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #F0ECE4;">
          <td style="padding: 10px 0; font-weight: 700; color: #001651;">Correo Electrónico:</td>
          <td style="padding: 10px 0;"><a href="mailto:${cleanEmail}" style="color: #006637; text-decoration: underline;">${cleanEmail}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #F0ECE4;">
          <td style="padding: 10px 0; font-weight: 700; color: #001651;">Teléfono / WhatsApp:</td>
          <td style="padding: 10px 0;"><a href="tel:${cleanPhone.replace(/\s+/g, '')}" style="color: #006637; text-decoration: underline;">${cleanPhone}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #F0ECE4;">
          <td style="padding: 10px 0; font-weight: 700; color: #001651;">Seguro / Asunto:</td>
          <td style="padding: 10px 0; font-weight: 600; color: #001651;">${cleanSubject}</td>
        </tr>
        <tr style="border-bottom: 1px solid #F0ECE4;">
          <td style="padding: 10px 0; font-weight: 700; color: #001651;">Fecha y Hora:</td>
          <td style="padding: 10px 0; color: #718096; font-size: 13px;">${fechaChile}</td>
        </tr>
      </table>

      <div style="background-color: #FAF8F5; border-left: 4px solid #006637; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
        <strong style="display: block; margin-bottom: 6px; font-size: 13px; text-transform: uppercase; color: #006637; letter-spacing: 0.05em;">Detalle del Requerimiento:</strong>
        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #2D3748; white-space: pre-wrap;">${cleanNotes || '(Sin comentarios adicionales especificados)'}</p>
      </div>

      <div style="border-top: 1px solid #EAE6DF; padding-top: 18px; font-size: 13px; color: #718096; line-height: 1.5;">
        💡 <em>Puedes responder directamente a este correo para escribirle a <strong>${cleanName}</strong>, ya que su dirección está configurada en Reply-To.</em>
      </div>
    </div>

    <div style="background-color: #F8F6F2; padding: 16px 32px; font-size: 12px; color: #A0AEC0; text-align: center; border-top: 1px solid #EAE6DF;">
      JSP Seguros · Jeanette Salinas Ponce (Corredora de Seguros Titular) · www.segurosjsp.com
    </div>
  </div>
</body>
</html>
    `;

    // 8. Plantilla HTML 2: Confirmación para el visitante
    const clientHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Solicitud Recibida · JSP Seguros</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF8F5; margin: 0; padding: 24px; color: #152238;">
  <div style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 14px; border: 1px solid #EAE6DF; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.05);">
    
    <div style="background: linear-gradient(135deg, #001651 0%, #006637 100%); padding: 32px; color: #FFFFFF; text-align: center;">
      <h1 style="margin: 0 0 6px; font-size: 24px; font-weight: 800; letter-spacing: -0.02em;">JSP Seguros</h1>
      <p style="margin: 0; font-size: 14px; color: #D1FAE5; font-style: italic;">Yo gestiono por ti</p>
    </div>

    <div style="padding: 32px;">
      <h2 style="font-size: 19px; color: #001651; margin-top: 0; margin-bottom: 14px; font-weight: 700;">
        ¡Hola, ${cleanName}!
      </h2>

      <p style="font-size: 15px; line-height: 1.6; color: #4B5565; margin-bottom: 18px;">
        Hemos recibido correctamente tu solicitud de asesoría en relación a <strong>${cleanSubject}</strong>.
      </p>

      <div style="background-color: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 10px; padding: 18px; margin-bottom: 24px;">
        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #166534;">
          <strong>Jeanette Salinas Ponce</strong> revisará personalmente tus antecedentes para encontrar la alternativa de cobertura más adecuada a tus necesidades y se comunicará contigo a la brevedad.
        </p>
      </div>

      <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280; margin-bottom: 12px; margin-top: 0;">
        Resumen de tu solicitud:
      </h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13.5px;">
        <tr style="border-bottom: 1px solid #F0ECE4;">
          <td style="padding: 8px 0; color: #6B7280; width: 40%;">Seguro de Interés:</td>
          <td style="padding: 8px 0; font-weight: 600; color: #152238;">${cleanSubject}</td>
        </tr>
        <tr style="border-bottom: 1px solid #F0ECE4;">
          <td style="padding: 8px 0; color: #6B7280;">Teléfono de Contacto:</td>
          <td style="padding: 8px 0; color: #152238;">${cleanPhone}</td>
        </tr>
        ${cleanNotes ? `
        <tr style="border-bottom: 1px solid #F0ECE4;">
          <td style="padding: 8px 0; color: #6B7280; vertical-align: top;">Comentarios:</td>
          <td style="padding: 8px 0; color: #152238;">${cleanNotes}</td>
        </tr>
        ` : ''}
      </table>

      <p style="font-size: 14px; line-height: 1.6; color: #4B5565; margin-bottom: 20px;">
        Si requieres atención urgente o asistencia inmediata, puedes escribir directamente al WhatsApp oficial:
      </p>

      <div style="text-align: center; margin-bottom: 28px;">
        <a href="https://wa.me/56996173591" style="display: inline-block; background-color: #25D366; color: #FFFFFF; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);">
          Contactar por WhatsApp (+56 9 9617 3591)
        </a>
      </div>

      <div style="border-top: 1px solid #EAE6DF; padding-top: 20px; font-size: 13px; color: #6B7280; line-height: 1.6;">
        <strong>Jeanette Salinas Ponce</strong><br>
        Corredora de Seguros Titular · Registro CMF Chile<br>
        Correo: <a href="mailto:contacto@segurosjsp.com" style="color: #006637;">contacto@segurosjsp.com</a> | Web: <a href="https://www.segurosjsp.com" style="color: #006637;">www.segurosjsp.com</a>
      </div>
    </div>

    <div style="background-color: #F8F6F2; padding: 16px 32px; font-size: 11.5px; color: #9CA3AF; text-align: center; border-top: 1px solid #EAE6DF;">
      © 2026 JSP Seguros · Asesoría profesional y protección patrimonial · Santiago, Chile
    </div>
  </div>
</body>
</html>
    `;

    // 9. Enviar correos a través de la API REST de Resend
    async function sendResend(payload) {
      const resp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await resp.json().catch(() => null);
      return { ok: resp.ok, status: resp.status, data };
    }

    // Ejecutar envío 1: Notificación a Jeanette
    const adminPayload = {
      from: SENDER_EMAIL,
      to: [JEANETTE_EMAIL],
      reply_to: cleanEmail,
      subject: `Nueva consulta de seguro: ${cleanSubject} - ${cleanName}`,
      html: adminHtml
    };
    const adminResult = await sendResend(adminPayload);

    // Ejecutar envío 2: Confirmación al visitante
    const clientPayload = {
      from: SENDER_EMAIL,
      to: [cleanEmail],
      reply_to: 'contacto@segurosjsp.com',
      subject: `Hemos recibido tu solicitud · JSP Seguros`,
      html: clientHtml
    };
    const clientResult = await sendResend(clientPayload);

    // 10. Evaluar resultados y registrar en memoria contra duplicados
    recentSubmissions.set(clientKey, Date.now());

    const bothOk = adminResult.ok && clientResult.ok;

    if (bothOk) {
      return res.status(200).json({
        success: true,
        message: 'Tu solicitud ha sido enviada con éxito. Hemos enviado una confirmación a tu correo.',
        adminEmail: {
          sent: true,
          id: adminResult.data?.id
        },
        clientEmail: {
          sent: true,
          id: clientResult.data?.id
        }
      });
    }

    // Si uno de los dos falló, reportar con precisión
    const errors = [];
    if (!adminResult.ok) {
      errors.push(`Error aviso administrador: ${adminResult.data?.message || 'Error desconocido'}`);
    }
    if (!clientResult.ok) {
      errors.push(`Error confirmación cliente: ${clientResult.data?.message || 'Error desconocido'}`);
    }

    return res.status(207).json({
      success: adminResult.ok, // Si al menos Jeanette recibió la consulta, success es true para el negocio
      partial: true,
      errors: errors,
      adminEmail: {
        sent: adminResult.ok,
        id: adminResult.data?.id,
        error: adminResult.data?.message
      },
      clientEmail: {
        sent: clientResult.ok,
        id: clientResult.data?.id,
        error: clientResult.data?.message
      }
    });

  } catch (err) {
    console.error('[Error no controlado en /api/contact]:', err);
    return res.status(500).json({
      success: false,
      error: 'Ocurrió un error inesperado al procesar tu solicitud. Por favor, intenta nuevamente o contáctanos por WhatsApp.'
    });
  }
};
