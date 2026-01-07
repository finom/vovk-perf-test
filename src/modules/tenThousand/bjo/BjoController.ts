import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjo")
export default class BjoController {
  @operation({
    summary: "Get Bjo",
  })
  @get()
  static getBjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjo",
  })
  @post("{id}")
  static createBjo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
