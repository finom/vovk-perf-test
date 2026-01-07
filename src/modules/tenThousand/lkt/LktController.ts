import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkt")
export default class LktController {
  @operation({
    summary: "Get Lkt",
  })
  @get()
  static getLkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkt",
  })
  @post("{id}")
  static createLkt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
