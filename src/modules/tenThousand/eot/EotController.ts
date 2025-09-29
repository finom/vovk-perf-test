import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eots")
export default class EotController {
  @operation({
    summary: "Get Eots",
  })
  @get()
  static getEots = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eot",
  })
  @post("{id}")
  static createEot = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
