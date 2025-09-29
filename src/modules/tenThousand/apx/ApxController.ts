import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apxes")
export default class ApxController {
  @operation({
    summary: "Get Apxes",
  })
  @get()
  static getApxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apx",
  })
  @post("{id}")
  static createApx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
