import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjg")
export default class JjgController {
  @operation({
    summary: "Get Jjg",
  })
  @get()
  static getJjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjg",
  })
  @post("{id}")
  static createJjg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
