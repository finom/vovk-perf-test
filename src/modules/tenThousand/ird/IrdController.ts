import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ird")
export default class IrdController {
  @operation({
    summary: "Get Ird",
  })
  @get()
  static getIrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ird",
  })
  @post("{id}")
  static createIrd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
