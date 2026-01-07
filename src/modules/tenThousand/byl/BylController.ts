import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byl")
export default class BylController {
  @operation({
    summary: "Get Byl",
  })
  @get()
  static getByl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byl",
  })
  @post("{id}")
  static createByl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
