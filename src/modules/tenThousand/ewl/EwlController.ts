import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewl")
export default class EwlController {
  @operation({
    summary: "Get Ewl",
  })
  @get()
  static getEwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewl",
  })
  @post("{id}")
  static createEwl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
