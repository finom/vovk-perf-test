import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmgs")
export default class HmgController {
  @operation({
    summary: "Get Hmgs",
  })
  @get()
  static getHmgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmg",
  })
  @post("{id}")
  static createHmg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
