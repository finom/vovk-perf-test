import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtzs")
export default class DtzController {
  @operation({
    summary: "Get Dtzs",
  })
  @get()
  static getDtzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtz",
  })
  @post("{id}")
  static createDtz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
