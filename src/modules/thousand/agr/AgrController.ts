import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agrs")
export default class AgrController {
  @operation({
    summary: "Get Agrs",
  })
  @get()
  static getAgrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agr",
  })
  @post("{id}")
  static createAgr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
