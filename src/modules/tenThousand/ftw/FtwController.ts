import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftw")
export default class FtwController {
  @operation({
    summary: "Get Ftw",
  })
  @get()
  static getFtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftw",
  })
  @post("{id}")
  static createFtw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
