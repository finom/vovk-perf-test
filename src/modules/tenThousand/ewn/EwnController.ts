import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewns")
export default class EwnController {
  @operation({
    summary: "Get Ewns",
  })
  @get()
  static getEwns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewn",
  })
  @post("{id}")
  static createEwn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
