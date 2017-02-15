"use strict";
exports.lettersNumbers400 = '^[a-zA-Z0-9ñÑáÁéÉíÍóÓúÚöÖüÜ\\s]{1,400}$';
exports.lettersNumbers150 = '^[a-zA-Z0-9ñÑáÁéÉíÍóÓúÚöÖüÜ\\s]{1,150}$';
exports.email = '^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$';
exports.guid = '^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$';
