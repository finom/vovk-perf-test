import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zk")
export default class ZkController {
  @operation({
    summary: "Get Zk",
  })
  @get()
  static getZk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zk",
  })
  @post("{id}")
  static createZk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
