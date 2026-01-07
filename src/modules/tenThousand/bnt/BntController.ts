import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnt")
export default class BntController {
  @operation({
    summary: "Get Bnt",
  })
  @get()
  static getBnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnt",
  })
  @post("{id}")
  static createBnt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
