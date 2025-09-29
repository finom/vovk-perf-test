import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyls")
export default class FylController {
  @operation({
    summary: "Get Fyls",
  })
  @get()
  static getFyls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyl",
  })
  @post("{id}")
  static createFyl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
