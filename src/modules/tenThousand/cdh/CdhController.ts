import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdhs")
export default class CdhController {
  @operation({
    summary: "Get Cdhs",
  })
  @get()
  static getCdhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdh",
  })
  @post("{id}")
  static createCdh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
