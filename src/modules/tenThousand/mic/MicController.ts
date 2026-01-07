import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mic")
export default class MicController {
  @operation({
    summary: "Get Mic",
  })
  @get()
  static getMic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mic",
  })
  @post("{id}")
  static createMic = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
