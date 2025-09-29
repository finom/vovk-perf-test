import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hafs")
export default class HafController {
  @operation({
    summary: "Get Hafs",
  })
  @get()
  static getHafs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Haf",
  })
  @post("{id}")
  static createHaf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
