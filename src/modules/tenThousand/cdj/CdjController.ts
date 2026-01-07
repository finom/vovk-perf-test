import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdj")
export default class CdjController {
  @operation({
    summary: "Get Cdj",
  })
  @get()
  static getCdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdj",
  })
  @post("{id}")
  static createCdj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
