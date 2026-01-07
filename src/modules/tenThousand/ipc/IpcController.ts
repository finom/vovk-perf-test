import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipc")
export default class IpcController {
  @operation({
    summary: "Get Ipc",
  })
  @get()
  static getIpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipc",
  })
  @post("{id}")
  static createIpc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
