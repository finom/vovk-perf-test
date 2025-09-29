import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnps")
export default class BnpController {
  @operation({
    summary: "Get Bnps",
  })
  @get()
  static getBnps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnp",
  })
  @post("{id}")
  static createBnp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
