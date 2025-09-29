import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eiqs")
export default class EiqController {
  @operation({
    summary: "Get Eiqs",
  })
  @get()
  static getEiqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eiq",
  })
  @post("{id}")
  static createEiq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
