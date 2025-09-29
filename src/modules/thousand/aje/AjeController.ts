import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajes")
export default class AjeController {
  @operation({
    summary: "Get Ajes",
  })
  @get()
  static getAjes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aje",
  })
  @post("{id}")
  static createAje = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
