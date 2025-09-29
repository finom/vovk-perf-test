import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mces")
export default class MceController {
  @operation({
    summary: "Get Mces",
  })
  @get()
  static getMces = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mce",
  })
  @post("{id}")
  static createMce = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
