import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elk")
export default class ElkController {
  @operation({
    summary: "Get Elk",
  })
  @get()
  static getElk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elk",
  })
  @post("{id}")
  static createElk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
