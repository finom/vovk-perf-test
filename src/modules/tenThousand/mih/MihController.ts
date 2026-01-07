import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mih")
export default class MihController {
  @operation({
    summary: "Get Mih",
  })
  @get()
  static getMih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mih",
  })
  @post("{id}")
  static createMih = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
