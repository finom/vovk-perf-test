import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isv")
export default class IsvController {
  @operation({
    summary: "Get Isv",
  })
  @get()
  static getIsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isv",
  })
  @post("{id}")
  static createIsv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
