import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsws")
export default class HswController {
  @operation({
    summary: "Get Hsws",
  })
  @get()
  static getHsws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsw",
  })
  @post("{id}")
  static createHsw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
