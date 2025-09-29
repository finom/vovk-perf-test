import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fljs")
export default class FljController {
  @operation({
    summary: "Get Fljs",
  })
  @get()
  static getFljs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flj",
  })
  @post("{id}")
  static createFlj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
