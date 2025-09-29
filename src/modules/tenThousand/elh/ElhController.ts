import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elhs")
export default class ElhController {
  @operation({
    summary: "Get Elhs",
  })
  @get()
  static getElhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elh",
  })
  @post("{id}")
  static createElh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
