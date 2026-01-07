import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxu")
export default class JxuController {
  @operation({
    summary: "Get Jxu",
  })
  @get()
  static getJxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxu",
  })
  @post("{id}")
  static createJxu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
