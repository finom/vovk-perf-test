import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgls")
export default class FglController {
  @operation({
    summary: "Get Fgls",
  })
  @get()
  static getFgls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgl",
  })
  @post("{id}")
  static createFgl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
