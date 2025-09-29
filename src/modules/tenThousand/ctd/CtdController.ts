import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctds")
export default class CtdController {
  @operation({
    summary: "Get Ctds",
  })
  @get()
  static getCtds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctd",
  })
  @post("{id}")
  static createCtd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
