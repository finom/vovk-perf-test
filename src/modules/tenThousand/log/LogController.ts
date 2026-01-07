import { procedure, prefix, get, post, operation } from "vovk";

@prefix("log")
export default class LogController {
  @operation({
    summary: "Get Log",
  })
  @get()
  static getLog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Log",
  })
  @post("{id}")
  static createLog = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
