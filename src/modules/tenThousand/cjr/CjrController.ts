import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjrs")
export default class CjrController {
  @operation({
    summary: "Get Cjrs",
  })
  @get()
  static getCjrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjr",
  })
  @post("{id}")
  static createCjr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
