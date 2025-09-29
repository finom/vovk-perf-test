import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhqs")
export default class BhqController {
  @operation({
    summary: "Get Bhqs",
  })
  @get()
  static getBhqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhq",
  })
  @post("{id}")
  static createBhq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
