import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afv")
export default class AfvController {
  @operation({
    summary: "Get Afv",
  })
  @get()
  static getAfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afv",
  })
  @post("{id}")
  static createAfv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
