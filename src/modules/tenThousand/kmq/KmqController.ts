import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmq")
export default class KmqController {
  @operation({
    summary: "Get Kmq",
  })
  @get()
  static getKmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmq",
  })
  @post("{id}")
  static createKmq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
