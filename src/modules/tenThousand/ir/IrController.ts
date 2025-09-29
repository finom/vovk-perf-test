import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irs")
export default class IrController {
  @operation({
    summary: "Get Irs",
  })
  @get()
  static getIrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ir",
  })
  @post("{id}")
  static createIr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
