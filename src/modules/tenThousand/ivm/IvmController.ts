import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivms")
export default class IvmController {
  @operation({
    summary: "Get Ivms",
  })
  @get()
  static getIvms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivm",
  })
  @post("{id}")
  static createIvm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
