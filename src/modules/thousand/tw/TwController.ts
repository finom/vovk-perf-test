import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tw")
export default class TwController {
  @operation({
    summary: "Get Tw",
  })
  @get()
  static getTw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tw",
  })
  @post("{id}")
  static createTw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
