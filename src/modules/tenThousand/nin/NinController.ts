import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nins")
export default class NinController {
  @operation({
    summary: "Get Nins",
  })
  @get()
  static getNins = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nin",
  })
  @post("{id}")
  static createNin = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
