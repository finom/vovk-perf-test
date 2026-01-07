import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwx")
export default class GwxController {
  @operation({
    summary: "Get Gwx",
  })
  @get()
  static getGwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwx",
  })
  @post("{id}")
  static createGwx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
