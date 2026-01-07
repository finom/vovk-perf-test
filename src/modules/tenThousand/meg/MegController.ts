import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meg")
export default class MegController {
  @operation({
    summary: "Get Meg",
  })
  @get()
  static getMeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Meg",
  })
  @post("{id}")
  static createMeg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
