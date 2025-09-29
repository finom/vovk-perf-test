import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbbs")
export default class FbbController {
  @operation({
    summary: "Get Fbbs",
  })
  @get()
  static getFbbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbb",
  })
  @post("{id}")
  static createFbb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
