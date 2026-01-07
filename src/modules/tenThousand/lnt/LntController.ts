import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnt")
export default class LntController {
  @operation({
    summary: "Get Lnt",
  })
  @get()
  static getLnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnt",
  })
  @post("{id}")
  static createLnt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
