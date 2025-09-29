import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgjs")
export default class HgjController {
  @operation({
    summary: "Get Hgjs",
  })
  @get()
  static getHgjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgj",
  })
  @post("{id}")
  static createHgj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
