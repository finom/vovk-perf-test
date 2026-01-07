import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqg")
export default class MqgController {
  @operation({
    summary: "Get Mqg",
  })
  @get()
  static getMqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqg",
  })
  @post("{id}")
  static createMqg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
