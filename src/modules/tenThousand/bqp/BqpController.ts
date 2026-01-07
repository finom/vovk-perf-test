import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqp")
export default class BqpController {
  @operation({
    summary: "Get Bqp",
  })
  @get()
  static getBqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqp",
  })
  @post("{id}")
  static createBqp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
