import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hiqs")
export default class HiqController {
  @operation({
    summary: "Get Hiqs",
  })
  @get()
  static getHiqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hiq",
  })
  @post("{id}")
  static createHiq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
