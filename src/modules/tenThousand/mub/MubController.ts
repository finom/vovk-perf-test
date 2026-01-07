import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mub")
export default class MubController {
  @operation({
    summary: "Get Mub",
  })
  @get()
  static getMub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mub",
  })
  @post("{id}")
  static createMub = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
