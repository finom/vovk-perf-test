import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggzs")
export default class GgzController {
  @operation({
    summary: "Get Ggzs",
  })
  @get()
  static getGgzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggz",
  })
  @post("{id}")
  static createGgz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
