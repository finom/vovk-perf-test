import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgz")
export default class MgzController {
  @operation({
    summary: "Get Mgz",
  })
  @get()
  static getMgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgz",
  })
  @post("{id}")
  static createMgz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
