import { procedure, prefix, get, post, operation } from "vovk";

@prefix("due")
export default class DueController {
  @operation({
    summary: "Get Due",
  })
  @get()
  static getDue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Due",
  })
  @post("{id}")
  static createDue = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
