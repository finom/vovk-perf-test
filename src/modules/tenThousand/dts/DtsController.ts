import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dts")
export default class DtsController {
  @operation({
    summary: "Get Dts",
  })
  @get()
  static getDts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dts",
  })
  @post("{id}")
  static createDts = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
