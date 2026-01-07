import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efs")
export default class EfsController {
  @operation({
    summary: "Get Efs",
  })
  @get()
  static getEfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efs",
  })
  @post("{id}")
  static createEfs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
