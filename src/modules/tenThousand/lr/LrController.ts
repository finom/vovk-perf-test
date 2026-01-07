import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lr")
export default class LrController {
  @operation({
    summary: "Get Lr",
  })
  @get()
  static getLr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lr",
  })
  @post("{id}")
  static createLr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
