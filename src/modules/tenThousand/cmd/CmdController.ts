import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmds")
export default class CmdController {
  @operation({
    summary: "Get Cmds",
  })
  @get()
  static getCmds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmd",
  })
  @post("{id}")
  static createCmd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
