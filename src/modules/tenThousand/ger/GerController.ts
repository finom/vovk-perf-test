import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gers")
export default class GerController {
  @operation({
    summary: "Get Gers",
  })
  @get()
  static getGers = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ger",
  })
  @post("{id}")
  static createGer = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
