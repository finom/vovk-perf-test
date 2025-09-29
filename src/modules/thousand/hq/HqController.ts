import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqs")
export default class HqController {
  @operation({
    summary: "Get Hqs",
  })
  @get()
  static getHqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hq",
  })
  @post("{id}")
  static createHq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
