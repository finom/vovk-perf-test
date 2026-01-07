import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgq")
export default class MgqController {
  @operation({
    summary: "Get Mgq",
  })
  @get()
  static getMgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgq",
  })
  @post("{id}")
  static createMgq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
