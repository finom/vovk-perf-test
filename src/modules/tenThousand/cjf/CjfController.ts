import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjfs")
export default class CjfController {
  @operation({
    summary: "Get Cjfs",
  })
  @get()
  static getCjfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjf",
  })
  @post("{id}")
  static createCjf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
