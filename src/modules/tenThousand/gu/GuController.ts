import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gu")
export default class GuController {
  @operation({
    summary: "Get Gu",
  })
  @get()
  static getGu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gu",
  })
  @post("{id}")
  static createGu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
