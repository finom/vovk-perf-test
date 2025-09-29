import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckds")
export default class CkdController {
  @operation({
    summary: "Get Ckds",
  })
  @get()
  static getCkds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckd",
  })
  @post("{id}")
  static createCkd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
