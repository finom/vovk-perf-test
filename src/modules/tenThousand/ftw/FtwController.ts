import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftws")
export default class FtwController {
  @operation({
    summary: "Get Ftws",
  })
  @get()
  static getFtws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftw",
  })
  @post("{id}")
  static createFtw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
