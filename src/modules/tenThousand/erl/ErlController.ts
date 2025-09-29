import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erls")
export default class ErlController {
  @operation({
    summary: "Get Erls",
  })
  @get()
  static getErls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erl",
  })
  @post("{id}")
  static createErl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
