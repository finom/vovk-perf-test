import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbh")
export default class MbhController {
  @operation({
    summary: "Get Mbh",
  })
  @get()
  static getMbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbh",
  })
  @post("{id}")
  static createMbh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
