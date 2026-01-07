import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpw")
export default class MpwController {
  @operation({
    summary: "Get Mpw",
  })
  @get()
  static getMpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpw",
  })
  @post("{id}")
  static createMpw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
