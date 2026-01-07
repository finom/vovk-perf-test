import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byz")
export default class ByzController {
  @operation({
    summary: "Get Byz",
  })
  @get()
  static getByz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byz",
  })
  @post("{id}")
  static createByz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
