import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdus")
export default class KduController {
  @operation({
    summary: "Get Kdus",
  })
  @get()
  static getKdus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdu",
  })
  @post("{id}")
  static createKdu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
