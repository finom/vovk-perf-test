import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ws")
export default class WsController {
  @operation({
    summary: "Get Ws",
  })
  @get()
  static getWs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ws",
  })
  @post("{id}")
  static createWs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
