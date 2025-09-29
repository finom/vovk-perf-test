import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lohs")
export default class LohController {
  @operation({
    summary: "Get Lohs",
  })
  @get()
  static getLohs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Loh",
  })
  @post("{id}")
  static createLoh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
