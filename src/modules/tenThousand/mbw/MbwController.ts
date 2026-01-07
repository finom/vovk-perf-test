import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbw")
export default class MbwController {
  @operation({
    summary: "Get Mbw",
  })
  @get()
  static getMbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbw",
  })
  @post("{id}")
  static createMbw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
