import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfk")
export default class LfkController {
  @operation({
    summary: "Get Lfk",
  })
  @get()
  static getLfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfk",
  })
  @post("{id}")
  static createLfk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
