import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dow")
export default class DowController {
  @operation({
    summary: "Get Dow",
  })
  @get()
  static getDow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dow",
  })
  @post("{id}")
  static createDow = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
