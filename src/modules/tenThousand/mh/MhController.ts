import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mh")
export default class MhController {
  @operation({
    summary: "Get Mh",
  })
  @get()
  static getMh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mh",
  })
  @post("{id}")
  static createMh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
