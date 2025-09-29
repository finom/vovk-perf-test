import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzzes")
export default class GzzController {
  @operation({
    summary: "Get Gzzes",
  })
  @get()
  static getGzzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzz",
  })
  @post("{id}")
  static createGzz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
