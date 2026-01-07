import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ded")
export default class DedController {
  @operation({
    summary: "Get Ded",
  })
  @get()
  static getDed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ded",
  })
  @post("{id}")
  static createDed = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
