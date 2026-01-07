import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtw")
export default class MtwController {
  @operation({
    summary: "Get Mtw",
  })
  @get()
  static getMtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtw",
  })
  @post("{id}")
  static createMtw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
