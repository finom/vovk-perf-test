import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbj")
export default class GbjController {
  @operation({
    summary: "Get Gbj",
  })
  @get()
  static getGbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbj",
  })
  @post("{id}")
  static createGbj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
