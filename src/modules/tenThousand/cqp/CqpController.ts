import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqp")
export default class CqpController {
  @operation({
    summary: "Get Cqp",
  })
  @get()
  static getCqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqp",
  })
  @post("{id}")
  static createCqp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
