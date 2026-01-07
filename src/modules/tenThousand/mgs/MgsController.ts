import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgs")
export default class MgsController {
  @operation({
    summary: "Get Mgs",
  })
  @get()
  static getMgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgs",
  })
  @post("{id}")
  static createMgs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
