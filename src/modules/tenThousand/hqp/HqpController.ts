import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqp")
export default class HqpController {
  @operation({
    summary: "Get Hqp",
  })
  @get()
  static getHqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqp",
  })
  @post("{id}")
  static createHqp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
