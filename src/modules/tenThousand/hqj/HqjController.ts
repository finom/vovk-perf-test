import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqjs")
export default class HqjController {
  @operation({
    summary: "Get Hqjs",
  })
  @get()
  static getHqjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqj",
  })
  @post("{id}")
  static createHqj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
