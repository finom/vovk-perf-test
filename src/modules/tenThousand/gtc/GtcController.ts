import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtcs")
export default class GtcController {
  @operation({
    summary: "Get Gtcs",
  })
  @get()
  static getGtcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtc",
  })
  @post("{id}")
  static createGtc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
