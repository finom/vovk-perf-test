import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnts")
export default class HntController {
  @operation({
    summary: "Get Hnts",
  })
  @get()
  static getHnts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnt",
  })
  @post("{id}")
  static createHnt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
