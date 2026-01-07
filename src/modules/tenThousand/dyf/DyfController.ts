import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyf")
export default class DyfController {
  @operation({
    summary: "Get Dyf",
  })
  @get()
  static getDyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyf",
  })
  @post("{id}")
  static createDyf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
