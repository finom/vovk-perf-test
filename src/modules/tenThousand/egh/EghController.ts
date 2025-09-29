import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eghs")
export default class EghController {
  @operation({
    summary: "Get Eghs",
  })
  @get()
  static getEghs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egh",
  })
  @post("{id}")
  static createEgh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
