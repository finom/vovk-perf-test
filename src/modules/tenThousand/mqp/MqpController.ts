import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqp")
export default class MqpController {
  @operation({
    summary: "Get Mqp",
  })
  @get()
  static getMqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqp",
  })
  @post("{id}")
  static createMqp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
