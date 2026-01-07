import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dms")
export default class DmsController {
  @operation({
    summary: "Get Dms",
  })
  @get()
  static getDms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dms",
  })
  @post("{id}")
  static createDms = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
