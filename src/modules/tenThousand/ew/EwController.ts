import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ews")
export default class EwController {
  @operation({
    summary: "Get Ews",
  })
  @get()
  static getEws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ew",
  })
  @post("{id}")
  static createEw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
