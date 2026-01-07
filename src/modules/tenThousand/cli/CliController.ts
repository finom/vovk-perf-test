import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cli")
export default class CliController {
  @operation({
    summary: "Get Cli",
  })
  @get()
  static getCli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cli",
  })
  @post("{id}")
  static createCli = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
