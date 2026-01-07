import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqk")
export default class MqkController {
  @operation({
    summary: "Get Mqk",
  })
  @get()
  static getMqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqk",
  })
  @post("{id}")
  static createMqk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
