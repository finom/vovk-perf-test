import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmq")
export default class FmqController {
  @operation({
    summary: "Get Fmq",
  })
  @get()
  static getFmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmq",
  })
  @post("{id}")
  static createFmq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
