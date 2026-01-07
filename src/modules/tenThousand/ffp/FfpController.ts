import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffp")
export default class FfpController {
  @operation({
    summary: "Get Ffp",
  })
  @get()
  static getFfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffp",
  })
  @post("{id}")
  static createFfp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
