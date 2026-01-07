import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbs")
export default class MbsController {
  @operation({
    summary: "Get Mbs",
  })
  @get()
  static getMbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbs",
  })
  @post("{id}")
  static createMbs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
