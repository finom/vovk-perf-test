import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqy")
export default class MqyController {
  @operation({
    summary: "Get Mqy",
  })
  @get()
  static getMqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqy",
  })
  @post("{id}")
  static createMqy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
