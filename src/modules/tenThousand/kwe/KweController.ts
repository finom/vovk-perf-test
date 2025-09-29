import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwes")
export default class KweController {
  @operation({
    summary: "Get Kwes",
  })
  @get()
  static getKwes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwe",
  })
  @post("{id}")
  static createKwe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
