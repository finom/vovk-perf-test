import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqh")
export default class MqhController {
  @operation({
    summary: "Get Mqh",
  })
  @get()
  static getMqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqh",
  })
  @post("{id}")
  static createMqh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
