import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csj")
export default class CsjController {
  @operation({
    summary: "Get Csj",
  })
  @get()
  static getCsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csj",
  })
  @post("{id}")
  static createCsj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
