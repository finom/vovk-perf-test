import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lil")
export default class LilController {
  @operation({
    summary: "Get Lil",
  })
  @get()
  static getLil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lil",
  })
  @post("{id}")
  static createLil = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
