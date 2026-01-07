import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwd")
export default class GwdController {
  @operation({
    summary: "Get Gwd",
  })
  @get()
  static getGwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwd",
  })
  @post("{id}")
  static createGwd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
