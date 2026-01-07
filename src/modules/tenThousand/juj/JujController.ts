import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juj")
export default class JujController {
  @operation({
    summary: "Get Juj",
  })
  @get()
  static getJuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juj",
  })
  @post("{id}")
  static createJuj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
