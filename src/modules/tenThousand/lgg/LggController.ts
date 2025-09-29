import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lggs")
export default class LggController {
  @operation({
    summary: "Get Lggs",
  })
  @get()
  static getLggs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgg",
  })
  @post("{id}")
  static createLgg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
