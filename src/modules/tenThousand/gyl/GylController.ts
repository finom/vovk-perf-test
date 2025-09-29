import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyls")
export default class GylController {
  @operation({
    summary: "Get Gyls",
  })
  @get()
  static getGyls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyl",
  })
  @post("{id}")
  static createGyl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
