import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fties")
export default class FtyController {
  @operation({
    summary: "Get Fties",
  })
  @get()
  static getFties = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fty",
  })
  @post("{id}")
  static createFty = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
