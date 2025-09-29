import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("albs")
export default class AlbController {
  @operation({
    summary: "Get Albs",
  })
  @get()
  static getAlbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alb",
  })
  @post("{id}")
  static createAlb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
