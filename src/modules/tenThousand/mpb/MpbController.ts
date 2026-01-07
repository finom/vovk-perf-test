import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpb")
export default class MpbController {
  @operation({
    summary: "Get Mpb",
  })
  @get()
  static getMpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpb",
  })
  @post("{id}")
  static createMpb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
