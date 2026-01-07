import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ann")
export default class AnnController {
  @operation({
    summary: "Get Ann",
  })
  @get()
  static getAnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ann",
  })
  @post("{id}")
  static createAnn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
