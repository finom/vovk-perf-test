import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrvs")
export default class MrvController {
  @operation({
    summary: "Get Mrvs",
  })
  @get()
  static getMrvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrv",
  })
  @post("{id}")
  static createMrv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
