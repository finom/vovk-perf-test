import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmps")
export default class BmpController {
  @operation({
    summary: "Get Bmps",
  })
  @get()
  static getBmps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmp",
  })
  @post("{id}")
  static createBmp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
