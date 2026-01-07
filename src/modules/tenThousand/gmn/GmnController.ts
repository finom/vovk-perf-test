import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmn")
export default class GmnController {
  @operation({
    summary: "Get Gmn",
  })
  @get()
  static getGmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmn",
  })
  @post("{id}")
  static createGmn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
