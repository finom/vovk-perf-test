import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ins")
export default class InsController {
  @operation({
    summary: "Get Ins",
  })
  @get()
  static getIns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ins",
  })
  @post("{id}")
  static createIns = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
