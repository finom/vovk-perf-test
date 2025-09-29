import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gves")
export default class GveController {
  @operation({
    summary: "Get Gves",
  })
  @get()
  static getGves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gve",
  })
  @post("{id}")
  static createGve = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
