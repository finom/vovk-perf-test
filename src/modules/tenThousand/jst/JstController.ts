import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsts")
export default class JstController {
  @operation({
    summary: "Get Jsts",
  })
  @get()
  static getJsts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jst",
  })
  @post("{id}")
  static createJst = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
