import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcc")
export default class GccController {
  @operation({
    summary: "Get Gcc",
  })
  @get()
  static getGcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcc",
  })
  @post("{id}")
  static createGcc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
