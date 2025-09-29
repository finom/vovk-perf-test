import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gus")
export default class GuController {
  @operation({
    summary: "Get Gus",
  })
  @get()
  static getGus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gu",
  })
  @post("{id}")
  static createGu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
