import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guks")
export default class GukController {
  @operation({
    summary: "Get Guks",
  })
  @get()
  static getGuks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Guk",
  })
  @post("{id}")
  static createGuk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
