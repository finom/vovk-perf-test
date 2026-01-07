import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mq")
export default class MqController {
  @operation({
    summary: "Get Mq",
  })
  @get()
  static getMq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mq",
  })
  @post("{id}")
  static createMq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
