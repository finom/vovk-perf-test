import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsgs")
export default class JsgController {
  @operation({
    summary: "Get Jsgs",
  })
  @get()
  static getJsgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsg",
  })
  @post("{id}")
  static createJsg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
