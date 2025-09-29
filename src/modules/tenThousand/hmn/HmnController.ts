import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmns")
export default class HmnController {
  @operation({
    summary: "Get Hmns",
  })
  @get()
  static getHmns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmn",
  })
  @post("{id}")
  static createHmn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
