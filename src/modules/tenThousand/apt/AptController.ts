import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apt")
export default class AptController {
  @operation({
    summary: "Get Apt",
  })
  @get()
  static getApt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apt",
  })
  @post("{id}")
  static createApt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
