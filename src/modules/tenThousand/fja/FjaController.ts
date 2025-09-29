import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjas")
export default class FjaController {
  @operation({
    summary: "Get Fjas",
  })
  @get()
  static getFjas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fja",
  })
  @post("{id}")
  static createFja = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
