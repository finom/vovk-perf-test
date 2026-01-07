import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dub")
export default class DubController {
  @operation({
    summary: "Get Dub",
  })
  @get()
  static getDub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dub",
  })
  @post("{id}")
  static createDub = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
