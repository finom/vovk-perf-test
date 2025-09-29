import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmxes")
export default class CmxController {
  @operation({
    summary: "Get Cmxes",
  })
  @get()
  static getCmxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmx",
  })
  @post("{id}")
  static createCmx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
