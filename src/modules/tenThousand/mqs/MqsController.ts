import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqs")
export default class MqsController {
  @operation({
    summary: "Get Mqs",
  })
  @get()
  static getMqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqs",
  })
  @post("{id}")
  static createMqs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
