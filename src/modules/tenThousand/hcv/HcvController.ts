import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcvs")
export default class HcvController {
  @operation({
    summary: "Get Hcvs",
  })
  @get()
  static getHcvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcv",
  })
  @post("{id}")
  static createHcv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
