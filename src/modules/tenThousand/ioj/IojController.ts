import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioj")
export default class IojController {
  @operation({
    summary: "Get Ioj",
  })
  @get()
  static getIoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioj",
  })
  @post("{id}")
  static createIoj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
