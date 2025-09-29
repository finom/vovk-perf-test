import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erjs")
export default class ErjController {
  @operation({
    summary: "Get Erjs",
  })
  @get()
  static getErjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erj",
  })
  @post("{id}")
  static createErj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
