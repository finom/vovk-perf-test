import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnf")
export default class BnfController {
  @operation({
    summary: "Get Bnf",
  })
  @get()
  static getBnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnf",
  })
  @post("{id}")
  static createBnf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
