import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgx")
export default class MgxController {
  @operation({
    summary: "Get Mgx",
  })
  @get()
  static getMgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgx",
  })
  @post("{id}")
  static createMgx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
