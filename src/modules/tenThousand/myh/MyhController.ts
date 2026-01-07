import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myh")
export default class MyhController {
  @operation({
    summary: "Get Myh",
  })
  @get()
  static getMyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myh",
  })
  @post("{id}")
  static createMyh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
