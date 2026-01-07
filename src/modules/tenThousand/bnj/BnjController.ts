import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnj")
export default class BnjController {
  @operation({
    summary: "Get Bnj",
  })
  @get()
  static getBnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnj",
  })
  @post("{id}")
  static createBnj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
