import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsus")
export default class HsuController {
  @operation({
    summary: "Get Hsus",
  })
  @get()
  static getHsus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsu",
  })
  @post("{id}")
  static createHsu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
