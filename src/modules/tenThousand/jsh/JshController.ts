import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsh")
export default class JshController {
  @operation({
    summary: "Get Jsh",
  })
  @get()
  static getJsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsh",
  })
  @post("{id}")
  static createJsh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
