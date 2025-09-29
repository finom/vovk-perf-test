import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("haqs")
export default class HaqController {
  @operation({
    summary: "Get Haqs",
  })
  @get()
  static getHaqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Haq",
  })
  @post("{id}")
  static createHaq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
