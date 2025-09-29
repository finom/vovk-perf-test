import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avps")
export default class AvpController {
  @operation({
    summary: "Get Avps",
  })
  @get()
  static getAvps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avp",
  })
  @post("{id}")
  static createAvp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
