import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhq")
export default class MhqController {
  @operation({
    summary: "Get Mhq",
  })
  @get()
  static getMhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhq",
  })
  @post("{id}")
  static createMhq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
