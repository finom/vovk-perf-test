import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zms")
export default class ZmController {
  @operation({
    summary: "Get Zms",
  })
  @get()
  static getZms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zm",
  })
  @post("{id}")
  static createZm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
