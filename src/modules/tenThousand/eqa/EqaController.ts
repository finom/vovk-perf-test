import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqa")
export default class EqaController {
  @operation({
    summary: "Get Eqa",
  })
  @get()
  static getEqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqa",
  })
  @post("{id}")
  static createEqa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
