import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpm")
export default class BpmController {
  @operation({
    summary: "Get Bpm",
  })
  @get()
  static getBpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpm",
  })
  @post("{id}")
  static createBpm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
