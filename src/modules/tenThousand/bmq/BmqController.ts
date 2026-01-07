import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmq")
export default class BmqController {
  @operation({
    summary: "Get Bmq",
  })
  @get()
  static getBmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmq",
  })
  @post("{id}")
  static createBmq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
