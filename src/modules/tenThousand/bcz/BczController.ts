import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bczs")
export default class BczController {
  @operation({
    summary: "Get Bczs",
  })
  @get()
  static getBczs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcz",
  })
  @post("{id}")
  static createBcz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
