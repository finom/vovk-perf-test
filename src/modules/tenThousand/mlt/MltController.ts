import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlt")
export default class MltController {
  @operation({
    summary: "Get Mlt",
  })
  @get()
  static getMlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlt",
  })
  @post("{id}")
  static createMlt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
