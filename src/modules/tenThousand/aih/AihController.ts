import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aihs")
export default class AihController {
  @operation({
    summary: "Get Aihs",
  })
  @get()
  static getAihs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aih",
  })
  @post("{id}")
  static createAih = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
