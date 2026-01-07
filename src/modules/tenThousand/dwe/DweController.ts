import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwe")
export default class DweController {
  @operation({
    summary: "Get Dwe",
  })
  @get()
  static getDwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwe",
  })
  @post("{id}")
  static createDwe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
