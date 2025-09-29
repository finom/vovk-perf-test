import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsns")
export default class JsnController {
  @operation({
    summary: "Get Jsns",
  })
  @get()
  static getJsns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsn",
  })
  @post("{id}")
  static createJsn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
