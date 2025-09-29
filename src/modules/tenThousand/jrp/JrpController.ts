import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrps")
export default class JrpController {
  @operation({
    summary: "Get Jrps",
  })
  @get()
  static getJrps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrp",
  })
  @post("{id}")
  static createJrp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
