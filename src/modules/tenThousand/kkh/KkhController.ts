import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkhs")
export default class KkhController {
  @operation({
    summary: "Get Kkhs",
  })
  @get()
  static getKkhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkh",
  })
  @post("{id}")
  static createKkh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
