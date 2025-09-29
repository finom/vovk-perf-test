import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffjs")
export default class FfjController {
  @operation({
    summary: "Get Ffjs",
  })
  @get()
  static getFfjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffj",
  })
  @post("{id}")
  static createFfj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
