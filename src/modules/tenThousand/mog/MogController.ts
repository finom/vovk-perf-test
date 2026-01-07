import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mog")
export default class MogController {
  @operation({
    summary: "Get Mog",
  })
  @get()
  static getMog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mog",
  })
  @post("{id}")
  static createMog = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
