import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecrs")
export default class EcrController {
  @operation({
    summary: "Get Ecrs",
  })
  @get()
  static getEcrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecr",
  })
  @post("{id}")
  static createEcr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
