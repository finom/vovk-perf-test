import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edg")
export default class EdgController {
  @operation({
    summary: "Get Edg",
  })
  @get()
  static getEdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edg",
  })
  @post("{id}")
  static createEdg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
