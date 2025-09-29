import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwbs")
export default class JwbController {
  @operation({
    summary: "Get Jwbs",
  })
  @get()
  static getJwbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwb",
  })
  @post("{id}")
  static createJwb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
