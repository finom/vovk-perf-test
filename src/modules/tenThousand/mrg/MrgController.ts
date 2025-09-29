import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrgs")
export default class MrgController {
  @operation({
    summary: "Get Mrgs",
  })
  @get()
  static getMrgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrg",
  })
  @post("{id}")
  static createMrg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
