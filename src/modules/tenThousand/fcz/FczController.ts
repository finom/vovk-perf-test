import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fczs")
export default class FczController {
  @operation({
    summary: "Get Fczs",
  })
  @get()
  static getFczs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcz",
  })
  @post("{id}")
  static createFcz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
