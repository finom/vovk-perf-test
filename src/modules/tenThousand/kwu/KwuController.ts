import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwus")
export default class KwuController {
  @operation({
    summary: "Get Kwus",
  })
  @get()
  static getKwus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwu",
  })
  @post("{id}")
  static createKwu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
