import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euses")
export default class EusController {
  @operation({
    summary: "Get Euses",
  })
  @get()
  static getEuses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eus",
  })
  @post("{id}")
  static createEus = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
