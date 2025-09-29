import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebns")
export default class EbnController {
  @operation({
    summary: "Get Ebns",
  })
  @get()
  static getEbns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebn",
  })
  @post("{id}")
  static createEbn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
