import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwies")
export default class JwyController {
  @operation({
    summary: "Get Jwies",
  })
  @get()
  static getJwies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwy",
  })
  @post("{id}")
  static createJwy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
