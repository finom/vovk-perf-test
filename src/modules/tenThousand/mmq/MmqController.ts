import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmq")
export default class MmqController {
  @operation({
    summary: "Get Mmq",
  })
  @get()
  static getMmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmq",
  })
  @post("{id}")
  static createMmq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
