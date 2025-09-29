import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyqs")
export default class HyqController {
  @operation({
    summary: "Get Hyqs",
  })
  @get()
  static getHyqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyq",
  })
  @post("{id}")
  static createHyq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
