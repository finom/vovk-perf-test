import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpy")
export default class MpyController {
  @operation({
    summary: "Get Mpy",
  })
  @get()
  static getMpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpy",
  })
  @post("{id}")
  static createMpy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
