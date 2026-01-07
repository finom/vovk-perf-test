import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezl")
export default class EzlController {
  @operation({
    summary: "Get Ezl",
  })
  @get()
  static getEzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezl",
  })
  @post("{id}")
  static createEzl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
