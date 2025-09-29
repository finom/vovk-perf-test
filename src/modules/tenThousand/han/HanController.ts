import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hans")
export default class HanController {
  @operation({
    summary: "Get Hans",
  })
  @get()
  static getHans = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Han",
  })
  @post("{id}")
  static createHan = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
