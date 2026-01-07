import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rs")
export default class RsController {
  @operation({
    summary: "Get Rs",
  })
  @get()
  static getRs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rs",
  })
  @post("{id}")
  static createRs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
