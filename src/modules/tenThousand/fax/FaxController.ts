import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("faxes")
export default class FaxController {
  @operation({
    summary: "Get Faxes",
  })
  @get()
  static getFaxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fax",
  })
  @post("{id}")
  static createFax = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
