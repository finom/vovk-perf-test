import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fps")
export default class FpsController {
  @operation({
    summary: "Get Fps",
  })
  @get()
  static getFps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fps",
  })
  @post("{id}")
  static createFps = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
