import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvh")
export default class KvhController {
  @operation({
    summary: "Get Kvh",
  })
  @get()
  static getKvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvh",
  })
  @post("{id}")
  static createKvh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
