import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inos")
export default class InoController {
  @operation({
    summary: "Get Inos",
  })
  @get()
  static getInos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ino",
  })
  @post("{id}")
  static createIno = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
