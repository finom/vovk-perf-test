import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwfs")
export default class JwfController {
  @operation({
    summary: "Get Jwfs",
  })
  @get()
  static getJwfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwf",
  })
  @post("{id}")
  static createJwf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
