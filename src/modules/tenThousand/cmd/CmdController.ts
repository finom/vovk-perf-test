import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmd")
export default class CmdController {
  @operation({
    summary: "Get Cmd",
  })
  @get()
  static getCmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmd",
  })
  @post("{id}")
  static createCmd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
