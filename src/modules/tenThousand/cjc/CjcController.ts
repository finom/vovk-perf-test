import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjcs")
export default class CjcController {
  @operation({
    summary: "Get Cjcs",
  })
  @get()
  static getCjcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjc",
  })
  @post("{id}")
  static createCjc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
