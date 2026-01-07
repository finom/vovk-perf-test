import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhg")
export default class MhgController {
  @operation({
    summary: "Get Mhg",
  })
  @get()
  static getMhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhg",
  })
  @post("{id}")
  static createMhg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
