import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amjs")
export default class AmjController {
  @operation({
    summary: "Get Amjs",
  })
  @get()
  static getAmjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amj",
  })
  @post("{id}")
  static createAmj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
