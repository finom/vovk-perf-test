import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvc")
export default class GvcController {
  @operation({
    summary: "Get Gvc",
  })
  @get()
  static getGvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvc",
  })
  @post("{id}")
  static createGvc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
