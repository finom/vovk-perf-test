import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("loos")
export default class LooController {
  @operation({
    summary: "Get Loos",
  })
  @get()
  static getLoos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Loo",
  })
  @post("{id}")
  static createLoo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
