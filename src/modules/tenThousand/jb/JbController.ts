import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jb")
export default class JbController {
  @operation({
    summary: "Get Jb",
  })
  @get()
  static getJb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jb",
  })
  @post("{id}")
  static createJb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
