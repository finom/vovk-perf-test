import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htj")
export default class HtjController {
  @operation({
    summary: "Get Htj",
  })
  @get()
  static getHtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htj",
  })
  @post("{id}")
  static createHtj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
