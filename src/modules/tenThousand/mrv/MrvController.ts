import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrv")
export default class MrvController {
  @operation({
    summary: "Get Mrv",
  })
  @get()
  static getMrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrv",
  })
  @post("{id}")
  static createMrv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
