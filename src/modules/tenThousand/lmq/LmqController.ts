import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmq")
export default class LmqController {
  @operation({
    summary: "Get Lmq",
  })
  @get()
  static getLmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmq",
  })
  @post("{id}")
  static createLmq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
