import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmzs")
export default class HmzController {
  @operation({
    summary: "Get Hmzs",
  })
  @get()
  static getHmzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmz",
  })
  @post("{id}")
  static createHmz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
