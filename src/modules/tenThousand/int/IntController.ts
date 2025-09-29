import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ints")
export default class IntController {
  @operation({
    summary: "Get Ints",
  })
  @get()
  static getInts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Int",
  })
  @post("{id}")
  static createInt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
