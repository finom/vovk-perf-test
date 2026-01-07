import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dom")
export default class DomController {
  @operation({
    summary: "Get Dom",
  })
  @get()
  static getDom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dom",
  })
  @post("{id}")
  static createDom = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
