import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmws")
export default class HmwController {
  @operation({
    summary: "Get Hmws",
  })
  @get()
  static getHmws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmw",
  })
  @post("{id}")
  static createHmw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
