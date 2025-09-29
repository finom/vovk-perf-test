import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hurs")
export default class HurController {
  @operation({
    summary: "Get Hurs",
  })
  @get()
  static getHurs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hur",
  })
  @post("{id}")
  static createHur = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
