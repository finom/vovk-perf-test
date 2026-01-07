import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moi")
export default class MoiController {
  @operation({
    summary: "Get Moi",
  })
  @get()
  static getMoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moi",
  })
  @post("{id}")
  static createMoi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
