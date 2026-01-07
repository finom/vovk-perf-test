import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqa")
export default class KqaController {
  @operation({
    summary: "Get Kqa",
  })
  @get()
  static getKqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqa",
  })
  @post("{id}")
  static createKqa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
