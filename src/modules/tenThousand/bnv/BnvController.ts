import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnv")
export default class BnvController {
  @operation({
    summary: "Get Bnv",
  })
  @get()
  static getBnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnv",
  })
  @post("{id}")
  static createBnv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
