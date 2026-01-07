import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnm")
export default class BnmController {
  @operation({
    summary: "Get Bnm",
  })
  @get()
  static getBnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnm",
  })
  @post("{id}")
  static createBnm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
