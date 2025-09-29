import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwds")
export default class CwdController {
  @operation({
    summary: "Get Cwds",
  })
  @get()
  static getCwds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwd",
  })
  @post("{id}")
  static createCwd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
