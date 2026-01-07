import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvk")
export default class KvkController {
  @operation({
    summary: "Get Kvk",
  })
  @get()
  static getKvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvk",
  })
  @post("{id}")
  static createKvk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
