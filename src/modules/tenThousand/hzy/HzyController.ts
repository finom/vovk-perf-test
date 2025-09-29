import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzies")
export default class HzyController {
  @operation({
    summary: "Get Hzies",
  })
  @get()
  static getHzies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzy",
  })
  @post("{id}")
  static createHzy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
