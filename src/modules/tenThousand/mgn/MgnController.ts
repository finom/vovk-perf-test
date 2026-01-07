import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgn")
export default class MgnController {
  @operation({
    summary: "Get Mgn",
  })
  @get()
  static getMgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgn",
  })
  @post("{id}")
  static createMgn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
