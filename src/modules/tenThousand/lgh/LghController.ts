import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgh")
export default class LghController {
  @operation({
    summary: "Get Lgh",
  })
  @get()
  static getLgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgh",
  })
  @post("{id}")
  static createLgh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
