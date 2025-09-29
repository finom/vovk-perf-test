import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sws")
export default class SwController {
  @operation({
    summary: "Get Sws",
  })
  @get()
  static getSws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sw",
  })
  @post("{id}")
  static createSw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
