import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guv")
export default class GuvController {
  @operation({
    summary: "Get Guv",
  })
  @get()
  static getGuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guv",
  })
  @post("{id}")
  static createGuv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
