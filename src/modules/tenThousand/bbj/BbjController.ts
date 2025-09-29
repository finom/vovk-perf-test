import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbjs")
export default class BbjController {
  @operation({
    summary: "Get Bbjs",
  })
  @get()
  static getBbjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbj",
  })
  @post("{id}")
  static createBbj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
