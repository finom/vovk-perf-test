import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmq")
export default class CmqController {
  @operation({
    summary: "Get Cmq",
  })
  @get()
  static getCmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmq",
  })
  @post("{id}")
  static createCmq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
