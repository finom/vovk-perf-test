import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imd")
export default class ImdController {
  @operation({
    summary: "Get Imd",
  })
  @get()
  static getImd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imd",
  })
  @post("{id}")
  static createImd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
