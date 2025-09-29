import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ics")
export default class IcsController {
  @operation({
    summary: "Get Ics",
  })
  @get()
  static getIcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ics",
  })
  @post("{id}")
  static createIcs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
