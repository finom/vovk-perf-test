import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgh")
export default class MghController {
  @operation({
    summary: "Get Mgh",
  })
  @get()
  static getMgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgh",
  })
  @post("{id}")
  static createMgh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
