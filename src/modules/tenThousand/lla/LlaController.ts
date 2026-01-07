import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lla")
export default class LlaController {
  @operation({
    summary: "Get Lla",
  })
  @get()
  static getLla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lla",
  })
  @post("{id}")
  static createLla = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
