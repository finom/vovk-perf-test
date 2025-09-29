import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivas")
export default class IvaController {
  @operation({
    summary: "Get Ivas",
  })
  @get()
  static getIvas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iva",
  })
  @post("{id}")
  static createIva = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
