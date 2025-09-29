import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knns")
export default class KnnController {
  @operation({
    summary: "Get Knns",
  })
  @get()
  static getKnns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knn",
  })
  @post("{id}")
  static createKnn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
