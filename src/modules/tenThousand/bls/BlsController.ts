import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bls")
export default class BlsController {
  @operation({
    summary: "Get Bls",
  })
  @get()
  static getBls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bls",
  })
  @post("{id}")
  static createBls = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
