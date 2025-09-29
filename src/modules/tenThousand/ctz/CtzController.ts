import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctzs")
export default class CtzController {
  @operation({
    summary: "Get Ctzs",
  })
  @get()
  static getCtzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctz",
  })
  @post("{id}")
  static createCtz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
