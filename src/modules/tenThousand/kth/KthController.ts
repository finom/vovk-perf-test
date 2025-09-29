import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kths")
export default class KthController {
  @operation({
    summary: "Get Kths",
  })
  @get()
  static getKths = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kth",
  })
  @post("{id}")
  static createKth = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
