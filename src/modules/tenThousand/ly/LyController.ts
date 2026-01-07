import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ly")
export default class LyController {
  @operation({
    summary: "Get Ly",
  })
  @get()
  static getLy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ly",
  })
  @post("{id}")
  static createLy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
