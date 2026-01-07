import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mux")
export default class MuxController {
  @operation({
    summary: "Get Mux",
  })
  @get()
  static getMux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mux",
  })
  @post("{id}")
  static createMux = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
