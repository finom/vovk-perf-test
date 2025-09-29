import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myvs")
export default class MyvController {
  @operation({
    summary: "Get Myvs",
  })
  @get()
  static getMyvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myv",
  })
  @post("{id}")
  static createMyv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
