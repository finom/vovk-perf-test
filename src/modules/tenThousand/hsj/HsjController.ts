import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsj")
export default class HsjController {
  @operation({
    summary: "Get Hsj",
  })
  @get()
  static getHsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsj",
  })
  @post("{id}")
  static createHsj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
