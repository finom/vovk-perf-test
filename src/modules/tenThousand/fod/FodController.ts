import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fods")
export default class FodController {
  @operation({
    summary: "Get Fods",
  })
  @get()
  static getFods = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fod",
  })
  @post("{id}")
  static createFod = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
