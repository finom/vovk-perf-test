import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htd")
export default class HtdController {
  @operation({
    summary: "Get Htd",
  })
  @get()
  static getHtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htd",
  })
  @post("{id}")
  static createHtd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
