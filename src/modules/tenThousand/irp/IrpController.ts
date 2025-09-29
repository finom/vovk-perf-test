import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irps")
export default class IrpController {
  @operation({
    summary: "Get Irps",
  })
  @get()
  static getIrps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irp",
  })
  @post("{id}")
  static createIrp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
