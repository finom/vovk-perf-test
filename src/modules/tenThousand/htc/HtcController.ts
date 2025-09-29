import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htcs")
export default class HtcController {
  @operation({
    summary: "Get Htcs",
  })
  @get()
  static getHtcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htc",
  })
  @post("{id}")
  static createHtc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
