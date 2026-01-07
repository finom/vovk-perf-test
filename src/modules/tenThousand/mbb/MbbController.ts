import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbb")
export default class MbbController {
  @operation({
    summary: "Get Mbb",
  })
  @get()
  static getMbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbb",
  })
  @post("{id}")
  static createMbb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
