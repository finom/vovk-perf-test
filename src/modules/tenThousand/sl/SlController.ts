import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sls")
export default class SlController {
  @operation({
    summary: "Get Sls",
  })
  @get()
  static getSls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sl",
  })
  @post("{id}")
  static createSl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
