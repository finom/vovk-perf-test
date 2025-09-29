import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzhs")
export default class BzhController {
  @operation({
    summary: "Get Bzhs",
  })
  @get()
  static getBzhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzh",
  })
  @post("{id}")
  static createBzh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
