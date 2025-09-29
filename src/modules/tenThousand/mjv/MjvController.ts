import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjvs")
export default class MjvController {
  @operation({
    summary: "Get Mjvs",
  })
  @get()
  static getMjvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjv",
  })
  @post("{id}")
  static createMjv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
