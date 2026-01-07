import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhp")
export default class MhpController {
  @operation({
    summary: "Get Mhp",
  })
  @get()
  static getMhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhp",
  })
  @post("{id}")
  static createMhp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
