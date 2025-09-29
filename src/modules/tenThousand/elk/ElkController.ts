import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elk")
export default class ElkController {
  @operation({
    summary: "Get Elk",
  })
  @get()
  static getElk = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elk",
  })
  @post("{id}")
  static createElk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
