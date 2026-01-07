import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyl")
export default class HylController {
  @operation({
    summary: "Get Hyl",
  })
  @get()
  static getHyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyl",
  })
  @post("{id}")
  static createHyl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
