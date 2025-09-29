import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgjs")
export default class MgjController {
  @operation({
    summary: "Get Mgjs",
  })
  @get()
  static getMgjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgj",
  })
  @post("{id}")
  static createMgj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
