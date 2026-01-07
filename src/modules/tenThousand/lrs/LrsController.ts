import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrs")
export default class LrsController {
  @operation({
    summary: "Get Lrs",
  })
  @get()
  static getLrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrs",
  })
  @post("{id}")
  static createLrs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
