import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlws")
export default class HlwController {
  @operation({
    summary: "Get Hlws",
  })
  @get()
  static getHlws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlw",
  })
  @post("{id}")
  static createHlw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
