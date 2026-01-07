import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrk")
export default class LrkController {
  @operation({
    summary: "Get Lrk",
  })
  @get()
  static getLrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrk",
  })
  @post("{id}")
  static createLrk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
