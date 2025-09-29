import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wjs")
export default class WjController {
  @operation({
    summary: "Get Wjs",
  })
  @get()
  static getWjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wj",
  })
  @post("{id}")
  static createWj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
