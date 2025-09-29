import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkrs")
export default class KkrController {
  @operation({
    summary: "Get Kkrs",
  })
  @get()
  static getKkrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkr",
  })
  @post("{id}")
  static createKkr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
