import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifw")
export default class IfwController {
  @operation({
    summary: "Get Ifw",
  })
  @get()
  static getIfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifw",
  })
  @post("{id}")
  static createIfw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
