import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exx")
export default class ExxController {
  @operation({
    summary: "Get Exx",
  })
  @get()
  static getExx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exx",
  })
  @post("{id}")
  static createExx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
