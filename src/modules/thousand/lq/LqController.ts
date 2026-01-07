import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lq")
export default class LqController {
  @operation({
    summary: "Get Lq",
  })
  @get()
  static getLq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lq",
  })
  @post("{id}")
  static createLq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
