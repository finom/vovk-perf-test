import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nms")
export default class NmsController {
  @operation({
    summary: "Get Nms",
  })
  @get()
  static getNms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nms",
  })
  @post("{id}")
  static createNms = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
