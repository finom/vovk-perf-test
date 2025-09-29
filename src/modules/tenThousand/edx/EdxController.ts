import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edxes")
export default class EdxController {
  @operation({
    summary: "Get Edxes",
  })
  @get()
  static getEdxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edx",
  })
  @post("{id}")
  static createEdx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
