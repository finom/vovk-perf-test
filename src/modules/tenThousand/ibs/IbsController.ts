import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibs")
export default class IbsController {
  @operation({
    summary: "Get Ibs",
  })
  @get()
  static getIbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibs",
  })
  @post("{id}")
  static createIbs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
