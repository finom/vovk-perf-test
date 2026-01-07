import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpg")
export default class MpgController {
  @operation({
    summary: "Get Mpg",
  })
  @get()
  static getMpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpg",
  })
  @post("{id}")
  static createMpg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
