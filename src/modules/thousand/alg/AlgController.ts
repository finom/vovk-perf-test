import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("algs")
export default class AlgController {
  @operation({
    summary: "Get Algs",
  })
  @get()
  static getAlgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alg",
  })
  @post("{id}")
  static createAlg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
