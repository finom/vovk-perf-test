import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyns")
export default class FynController {
  @operation({
    summary: "Get Fyns",
  })
  @get()
  static getFyns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyn",
  })
  @post("{id}")
  static createFyn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
