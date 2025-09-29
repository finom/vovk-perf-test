import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcvs")
export default class FcvController {
  @operation({
    summary: "Get Fcvs",
  })
  @get()
  static getFcvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcv",
  })
  @post("{id}")
  static createFcv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
