import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewfs")
export default class EwfController {
  @operation({
    summary: "Get Ewfs",
  })
  @get()
  static getEwfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewf",
  })
  @post("{id}")
  static createEwf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
