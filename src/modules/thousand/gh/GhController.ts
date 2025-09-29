import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghs")
export default class GhController {
  @operation({
    summary: "Get Ghs",
  })
  @get()
  static getGhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gh",
  })
  @post("{id}")
  static createGh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
