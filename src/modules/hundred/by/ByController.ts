import { procedure, prefix, get, post, operation } from "vovk";

@prefix("by")
export default class ByController {
  @operation({
    summary: "Get By",
  })
  @get()
  static getBy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create By",
  })
  @post("{id}")
  static createBy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
