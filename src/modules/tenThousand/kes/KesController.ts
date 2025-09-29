import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kes")
export default class KesController {
  @operation({
    summary: "Get Kes",
  })
  @get()
  static getKes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kes",
  })
  @post("{id}")
  static createKes = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
