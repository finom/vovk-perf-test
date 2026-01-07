import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmy")
export default class MmyController {
  @operation({
    summary: "Get Mmy",
  })
  @get()
  static getMmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmy",
  })
  @post("{id}")
  static createMmy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
