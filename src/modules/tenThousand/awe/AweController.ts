import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awes")
export default class AweController {
  @operation({
    summary: "Get Awes",
  })
  @get()
  static getAwes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awe",
  })
  @post("{id}")
  static createAwe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
