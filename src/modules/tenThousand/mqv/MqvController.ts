import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqv")
export default class MqvController {
  @operation({
    summary: "Get Mqv",
  })
  @get()
  static getMqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqv",
  })
  @post("{id}")
  static createMqv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
