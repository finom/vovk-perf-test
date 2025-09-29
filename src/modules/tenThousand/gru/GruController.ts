import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grus")
export default class GruController {
  @operation({
    summary: "Get Grus",
  })
  @get()
  static getGrus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gru",
  })
  @post("{id}")
  static createGru = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
