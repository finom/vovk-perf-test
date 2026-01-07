import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cq")
export default class CqController {
  @operation({
    summary: "Get Cq",
  })
  @get()
  static getCq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cq",
  })
  @post("{id}")
  static createCq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
