import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lis")
export default class LiController {
  @operation({
    summary: "Get Lis",
  })
  @get()
  static getLis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Li",
  })
  @post("{id}")
  static createLi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
