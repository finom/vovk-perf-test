import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwhs")
export default class JwhController {
  @operation({
    summary: "Get Jwhs",
  })
  @get()
  static getJwhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwh",
  })
  @post("{id}")
  static createJwh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
