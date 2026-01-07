import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brw")
export default class BrwController {
  @operation({
    summary: "Get Brw",
  })
  @get()
  static getBrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brw",
  })
  @post("{id}")
  static createBrw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
