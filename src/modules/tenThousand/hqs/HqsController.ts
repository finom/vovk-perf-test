import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqs")
export default class HqsController {
  @operation({
    summary: "Get Hqs",
  })
  @get()
  static getHqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqs",
  })
  @post("{id}")
  static createHqs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
