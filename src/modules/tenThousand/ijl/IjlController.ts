import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijl")
export default class IjlController {
  @operation({
    summary: "Get Ijl",
  })
  @get()
  static getIjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijl",
  })
  @post("{id}")
  static createIjl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
