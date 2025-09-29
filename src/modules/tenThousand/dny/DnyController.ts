import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnies")
export default class DnyController {
  @operation({
    summary: "Get Dnies",
  })
  @get()
  static getDnies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dny",
  })
  @post("{id}")
  static createDny = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
