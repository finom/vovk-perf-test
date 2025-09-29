import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyrs")
export default class HyrController {
  @operation({
    summary: "Get Hyrs",
  })
  @get()
  static getHyrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyr",
  })
  @post("{id}")
  static createHyr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
