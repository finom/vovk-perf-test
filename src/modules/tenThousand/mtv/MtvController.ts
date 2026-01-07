import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtv")
export default class MtvController {
  @operation({
    summary: "Get Mtv",
  })
  @get()
  static getMtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtv",
  })
  @post("{id}")
  static createMtv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
