import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcy")
export default class McyController {
  @operation({
    summary: "Get Mcy",
  })
  @get()
  static getMcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcy",
  })
  @post("{id}")
  static createMcy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
