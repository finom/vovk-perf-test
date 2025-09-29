import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdbs")
export default class KdbController {
  @operation({
    summary: "Get Kdbs",
  })
  @get()
  static getKdbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdb",
  })
  @post("{id}")
  static createKdb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
