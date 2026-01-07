import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edw")
export default class EdwController {
  @operation({
    summary: "Get Edw",
  })
  @get()
  static getEdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edw",
  })
  @post("{id}")
  static createEdw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
