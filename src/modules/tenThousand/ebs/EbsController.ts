import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebs")
export default class EbsController {
  @operation({
    summary: "Get Ebs",
  })
  @get()
  static getEbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebs",
  })
  @post("{id}")
  static createEbs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
