import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqp")
export default class DqpController {
  @operation({
    summary: "Get Dqp",
  })
  @get()
  static getDqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqp",
  })
  @post("{id}")
  static createDqp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
