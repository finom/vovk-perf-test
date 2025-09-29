import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjgs")
export default class CjgController {
  @operation({
    summary: "Get Cjgs",
  })
  @get()
  static getCjgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjg",
  })
  @post("{id}")
  static createCjg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
