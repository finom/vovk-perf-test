import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwqs")
export default class KwqController {
  @operation({
    summary: "Get Kwqs",
  })
  @get()
  static getKwqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwq",
  })
  @post("{id}")
  static createKwq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
