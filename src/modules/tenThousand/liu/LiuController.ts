import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lius")
export default class LiuController {
  @operation({
    summary: "Get Lius",
  })
  @get()
  static getLius = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Liu",
  })
  @post("{id}")
  static createLiu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
