import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpy")
export default class DpyController {
  @operation({
    summary: "Get Dpy",
  })
  @get()
  static getDpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpy",
  })
  @post("{id}")
  static createDpy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
