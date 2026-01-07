import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jds")
export default class JdsController {
  @operation({
    summary: "Get Jds",
  })
  @get()
  static getJds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jds",
  })
  @post("{id}")
  static createJds = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
