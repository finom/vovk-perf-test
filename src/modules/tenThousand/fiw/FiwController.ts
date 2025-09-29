import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fiws")
export default class FiwController {
  @operation({
    summary: "Get Fiws",
  })
  @get()
  static getFiws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fiw",
  })
  @post("{id}")
  static createFiw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
