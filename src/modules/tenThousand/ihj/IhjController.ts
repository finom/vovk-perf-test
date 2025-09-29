import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihjs")
export default class IhjController {
  @operation({
    summary: "Get Ihjs",
  })
  @get()
  static getIhjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihj",
  })
  @post("{id}")
  static createIhj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
