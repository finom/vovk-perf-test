import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtqs")
export default class GtqController {
  @operation({
    summary: "Get Gtqs",
  })
  @get()
  static getGtqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtq",
  })
  @post("{id}")
  static createGtq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
