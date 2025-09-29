import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlzs")
export default class HlzController {
  @operation({
    summary: "Get Hlzs",
  })
  @get()
  static getHlzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlz",
  })
  @post("{id}")
  static createHlz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
