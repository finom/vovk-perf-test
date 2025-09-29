import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("noos")
export default class NooController {
  @operation({
    summary: "Get Noos",
  })
  @get()
  static getNoos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Noo",
  })
  @post("{id}")
  static createNoo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
