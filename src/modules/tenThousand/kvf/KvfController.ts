import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvf")
export default class KvfController {
  @operation({
    summary: "Get Kvf",
  })
  @get()
  static getKvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvf",
  })
  @post("{id}")
  static createKvf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
