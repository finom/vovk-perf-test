import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aiis")
export default class AiiController {
  @operation({
    summary: "Get Aiis",
  })
  @get()
  static getAiis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aii",
  })
  @post("{id}")
  static createAii = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
