import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpx")
export default class MpxController {
  @operation({
    summary: "Get Mpx",
  })
  @get()
  static getMpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpx",
  })
  @post("{id}")
  static createMpx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
