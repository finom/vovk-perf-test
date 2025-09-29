import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mizs")
export default class MizController {
  @operation({
    summary: "Get Mizs",
  })
  @get()
  static getMizs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Miz",
  })
  @post("{id}")
  static createMiz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
