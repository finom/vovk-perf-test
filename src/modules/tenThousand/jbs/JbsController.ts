import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbs")
export default class JbsController {
  @operation({
    summary: "Get Jbs",
  })
  @get()
  static getJbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbs",
  })
  @post("{id}")
  static createJbs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
