import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggs")
export default class GgsController {
  @operation({
    summary: "Get Ggs",
  })
  @get()
  static getGgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggs",
  })
  @post("{id}")
  static createGgs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
