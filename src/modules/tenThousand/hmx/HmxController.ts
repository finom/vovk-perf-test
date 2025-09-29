import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmxes")
export default class HmxController {
  @operation({
    summary: "Get Hmxes",
  })
  @get()
  static getHmxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmx",
  })
  @post("{id}")
  static createHmx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
