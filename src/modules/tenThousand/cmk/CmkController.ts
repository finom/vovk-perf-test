import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmks")
export default class CmkController {
  @operation({
    summary: "Get Cmks",
  })
  @get()
  static getCmks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmk",
  })
  @post("{id}")
  static createCmk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
