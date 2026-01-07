import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lju")
export default class LjuController {
  @operation({
    summary: "Get Lju",
  })
  @get()
  static getLju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lju",
  })
  @post("{id}")
  static createLju = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
