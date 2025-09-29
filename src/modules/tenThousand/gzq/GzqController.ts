import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzqs")
export default class GzqController {
  @operation({
    summary: "Get Gzqs",
  })
  @get()
  static getGzqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzq",
  })
  @post("{id}")
  static createGzq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
