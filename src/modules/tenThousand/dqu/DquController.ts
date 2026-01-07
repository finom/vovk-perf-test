import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqu")
export default class DquController {
  @operation({
    summary: "Get Dqu",
  })
  @get()
  static getDqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqu",
  })
  @post("{id}")
  static createDqu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
