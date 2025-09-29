import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icgs")
export default class IcgController {
  @operation({
    summary: "Get Icgs",
  })
  @get()
  static getIcgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icg",
  })
  @post("{id}")
  static createIcg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
