import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idps")
export default class IdpController {
  @operation({
    summary: "Get Idps",
  })
  @get()
  static getIdps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idp",
  })
  @post("{id}")
  static createIdp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
