import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnt")
export default class DntController {
  @operation({
    summary: "Get Dnt",
  })
  @get()
  static getDnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnt",
  })
  @post("{id}")
  static createDnt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
