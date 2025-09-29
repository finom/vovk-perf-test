import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hycs")
export default class HycController {
  @operation({
    summary: "Get Hycs",
  })
  @get()
  static getHycs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyc",
  })
  @post("{id}")
  static createHyc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
