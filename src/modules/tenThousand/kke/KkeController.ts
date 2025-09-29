import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkes")
export default class KkeController {
  @operation({
    summary: "Get Kkes",
  })
  @get()
  static getKkes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kke",
  })
  @post("{id}")
  static createKke = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
