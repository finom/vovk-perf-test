import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfq")
export default class KfqController {
  @operation({
    summary: "Get Kfq",
  })
  @get()
  static getKfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfq",
  })
  @post("{id}")
  static createKfq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
