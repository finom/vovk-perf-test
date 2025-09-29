import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfqs")
export default class HfqController {
  @operation({
    summary: "Get Hfqs",
  })
  @get()
  static getHfqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfq",
  })
  @post("{id}")
  static createHfq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
