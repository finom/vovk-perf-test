import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bojs")
export default class BojController {
  @operation({
    summary: "Get Bojs",
  })
  @get()
  static getBojs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Boj",
  })
  @post("{id}")
  static createBoj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
