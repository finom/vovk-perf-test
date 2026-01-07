import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsj")
export default class BsjController {
  @operation({
    summary: "Get Bsj",
  })
  @get()
  static getBsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsj",
  })
  @post("{id}")
  static createBsj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
