import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhjs")
export default class HhjController {
  @operation({
    summary: "Get Hhjs",
  })
  @get()
  static getHhjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhj",
  })
  @post("{id}")
  static createHhj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
