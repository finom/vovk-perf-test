import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjs")
export default class BjController {
  @operation({
    summary: "Get Bjs",
  })
  @get()
  static getBjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bj",
  })
  @post("{id}")
  static createBj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
