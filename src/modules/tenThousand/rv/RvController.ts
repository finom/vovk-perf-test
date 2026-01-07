import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rv")
export default class RvController {
  @operation({
    summary: "Get Rv",
  })
  @get()
  static getRv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rv",
  })
  @post("{id}")
  static createRv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
