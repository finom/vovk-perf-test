import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irws")
export default class IrwController {
  @operation({
    summary: "Get Irws",
  })
  @get()
  static getIrws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irw",
  })
  @post("{id}")
  static createIrw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
