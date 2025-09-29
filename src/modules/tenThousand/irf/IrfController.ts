import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irfs")
export default class IrfController {
  @operation({
    summary: "Get Irfs",
  })
  @get()
  static getIrfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irf",
  })
  @post("{id}")
  static createIrf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
