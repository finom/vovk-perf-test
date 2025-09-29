import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffus")
export default class FfuController {
  @operation({
    summary: "Get Ffus",
  })
  @get()
  static getFfus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffu",
  })
  @post("{id}")
  static createFfu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
