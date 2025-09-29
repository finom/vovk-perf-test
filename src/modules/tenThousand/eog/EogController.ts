import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eogs")
export default class EogController {
  @operation({
    summary: "Get Eogs",
  })
  @get()
  static getEogs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eog",
  })
  @post("{id}")
  static createEog = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
