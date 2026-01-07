import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvi")
export default class LviController {
  @operation({
    summary: "Get Lvi",
  })
  @get()
  static getLvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvi",
  })
  @post("{id}")
  static createLvi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
