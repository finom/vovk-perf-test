import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knbs")
export default class KnbController {
  @operation({
    summary: "Get Knbs",
  })
  @get()
  static getKnbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knb",
  })
  @post("{id}")
  static createKnb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
