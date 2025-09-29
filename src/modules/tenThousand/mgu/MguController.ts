import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgus")
export default class MguController {
  @operation({
    summary: "Get Mgus",
  })
  @get()
  static getMgus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgu",
  })
  @post("{id}")
  static createMgu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
