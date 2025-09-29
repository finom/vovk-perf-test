import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjms")
export default class CjmController {
  @operation({
    summary: "Get Cjms",
  })
  @get()
  static getCjms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjm",
  })
  @post("{id}")
  static createCjm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
