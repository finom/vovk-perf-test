import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjj")
export default class CjjController {
  @operation({
    summary: "Get Cjj",
  })
  @get()
  static getCjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjj",
  })
  @post("{id}")
  static createCjj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
