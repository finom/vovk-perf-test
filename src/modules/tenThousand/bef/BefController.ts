import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bef")
export default class BefController {
  @operation({
    summary: "Get Bef",
  })
  @get()
  static getBef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bef",
  })
  @post("{id}")
  static createBef = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
