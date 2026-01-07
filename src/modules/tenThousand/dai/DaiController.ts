import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dai")
export default class DaiController {
  @operation({
    summary: "Get Dai",
  })
  @get()
  static getDai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dai",
  })
  @post("{id}")
  static createDai = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
