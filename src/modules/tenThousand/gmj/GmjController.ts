import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmj")
export default class GmjController {
  @operation({
    summary: "Get Gmj",
  })
  @get()
  static getGmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmj",
  })
  @post("{id}")
  static createGmj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
