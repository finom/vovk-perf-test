import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aiqs")
export default class AiqController {
  @operation({
    summary: "Get Aiqs",
  })
  @get()
  static getAiqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aiq",
  })
  @post("{id}")
  static createAiq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
