import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ink")
export default class InkController {
  @operation({
    summary: "Get Ink",
  })
  @get()
  static getInk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ink",
  })
  @post("{id}")
  static createInk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
