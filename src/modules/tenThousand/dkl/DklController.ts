import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkls")
export default class DklController {
  @operation({
    summary: "Get Dkls",
  })
  @get()
  static getDkls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkl",
  })
  @post("{id}")
  static createDkl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
