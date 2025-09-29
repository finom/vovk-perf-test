import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crls")
export default class CrlController {
  @operation({
    summary: "Get Crls",
  })
  @get()
  static getCrls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crl",
  })
  @post("{id}")
  static createCrl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
