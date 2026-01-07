import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdp")
export default class HdpController {
  @operation({
    summary: "Get Hdp",
  })
  @get()
  static getHdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdp",
  })
  @post("{id}")
  static createHdp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
