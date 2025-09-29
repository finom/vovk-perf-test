import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyes")
export default class HyeController {
  @operation({
    summary: "Get Hyes",
  })
  @get()
  static getHyes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hye",
  })
  @post("{id}")
  static createHye = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
