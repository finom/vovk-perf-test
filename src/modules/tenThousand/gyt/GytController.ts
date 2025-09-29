import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyts")
export default class GytController {
  @operation({
    summary: "Get Gyts",
  })
  @get()
  static getGyts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyt",
  })
  @post("{id}")
  static createGyt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
