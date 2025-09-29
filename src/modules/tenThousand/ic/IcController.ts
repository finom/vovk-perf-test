import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ics")
export default class IcController {
  @operation({
    summary: "Get Ics",
  })
  @get()
  static getIcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ic",
  })
  @post("{id}")
  static createIc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
