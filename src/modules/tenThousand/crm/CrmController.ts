import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crms")
export default class CrmController {
  @operation({
    summary: "Get Crms",
  })
  @get()
  static getCrms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crm",
  })
  @post("{id}")
  static createCrm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
