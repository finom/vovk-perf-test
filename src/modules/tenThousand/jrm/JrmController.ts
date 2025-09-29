import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrms")
export default class JrmController {
  @operation({
    summary: "Get Jrms",
  })
  @get()
  static getJrms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrm",
  })
  @post("{id}")
  static createJrm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
