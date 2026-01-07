import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhi")
export default class MhiController {
  @operation({
    summary: "Get Mhi",
  })
  @get()
  static getMhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhi",
  })
  @post("{id}")
  static createMhi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
