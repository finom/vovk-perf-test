import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irxes")
export default class IrxController {
  @operation({
    summary: "Get Irxes",
  })
  @get()
  static getIrxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irx",
  })
  @post("{id}")
  static createIrx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
