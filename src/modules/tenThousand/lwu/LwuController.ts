import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwus")
export default class LwuController {
  @operation({
    summary: "Get Lwus",
  })
  @get()
  static getLwus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwu",
  })
  @post("{id}")
  static createLwu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
