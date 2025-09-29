import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ioas")
export default class IoaController {
  @operation({
    summary: "Get Ioas",
  })
  @get()
  static getIoas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ioa",
  })
  @post("{id}")
  static createIoa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
