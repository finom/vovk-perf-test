import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("caxes")
export default class CaxController {
  @operation({
    summary: "Get Caxes",
  })
  @get()
  static getCaxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cax",
  })
  @post("{id}")
  static createCax = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
