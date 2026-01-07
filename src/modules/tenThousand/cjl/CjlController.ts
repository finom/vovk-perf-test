import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjl")
export default class CjlController {
  @operation({
    summary: "Get Cjl",
  })
  @get()
  static getCjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjl",
  })
  @post("{id}")
  static createCjl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
