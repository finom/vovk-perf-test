import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvms")
export default class HvmController {
  @operation({
    summary: "Get Hvms",
  })
  @get()
  static getHvms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvm",
  })
  @post("{id}")
  static createHvm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
