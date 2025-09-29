import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irms")
export default class IrmController {
  @operation({
    summary: "Get Irms",
  })
  @get()
  static getIrms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irm",
  })
  @post("{id}")
  static createIrm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
