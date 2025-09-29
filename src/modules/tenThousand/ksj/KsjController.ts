import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksjs")
export default class KsjController {
  @operation({
    summary: "Get Ksjs",
  })
  @get()
  static getKsjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksj",
  })
  @post("{id}")
  static createKsj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
