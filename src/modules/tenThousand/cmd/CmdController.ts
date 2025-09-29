import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmds")
export default class CmdController {
  @operation({
    summary: "Get Cmds",
  })
  @get()
  static getCmds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmd",
  })
  @post("{id}")
  static createCmd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
