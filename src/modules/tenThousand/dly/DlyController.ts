import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dly")
export default class DlyController {
  @operation({
    summary: "Get Dly",
  })
  @get()
  static getDly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dly",
  })
  @post("{id}")
  static createDly = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
