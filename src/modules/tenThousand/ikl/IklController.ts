import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikl")
export default class IklController {
  @operation({
    summary: "Get Ikl",
  })
  @get()
  static getIkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikl",
  })
  @post("{id}")
  static createIkl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
