import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhv")
export default class MhvController {
  @operation({
    summary: "Get Mhv",
  })
  @get()
  static getMhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhv",
  })
  @post("{id}")
  static createMhv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
