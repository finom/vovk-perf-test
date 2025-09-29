import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afps")
export default class AfpController {
  @operation({
    summary: "Get Afps",
  })
  @get()
  static getAfps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afp",
  })
  @post("{id}")
  static createAfp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
