import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abks")
export default class AbkController {
  @operation({
    summary: "Get Abks",
  })
  @get()
  static getAbks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abk",
  })
  @post("{id}")
  static createAbk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
