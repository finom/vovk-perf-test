import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bng")
export default class BngController {
  @operation({
    summary: "Get Bng",
  })
  @get()
  static getBng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bng",
  })
  @post("{id}")
  static createBng = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
