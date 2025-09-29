import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebs")
export default class EbController {
  @operation({
    summary: "Get Ebs",
  })
  @get()
  static getEbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eb",
  })
  @post("{id}")
  static createEb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
