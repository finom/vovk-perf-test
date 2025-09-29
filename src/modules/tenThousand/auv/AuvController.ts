import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auvs")
export default class AuvController {
  @operation({
    summary: "Get Auvs",
  })
  @get()
  static getAuvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Auv",
  })
  @post("{id}")
  static createAuv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
