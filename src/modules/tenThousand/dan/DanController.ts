import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dan")
export default class DanController {
  @operation({
    summary: "Get Dan",
  })
  @get()
  static getDan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dan",
  })
  @post("{id}")
  static createDan = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
