import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gries")
export default class GryController {
  @operation({
    summary: "Get Gries",
  })
  @get()
  static getGries = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gry",
  })
  @post("{id}")
  static createGry = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
