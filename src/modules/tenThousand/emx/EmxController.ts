import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emxes")
export default class EmxController {
  @operation({
    summary: "Get Emxes",
  })
  @get()
  static getEmxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emx",
  })
  @post("{id}")
  static createEmx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
