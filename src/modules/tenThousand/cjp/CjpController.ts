import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjp")
export default class CjpController {
  @operation({
    summary: "Get Cjp",
  })
  @get()
  static getCjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjp",
  })
  @post("{id}")
  static createCjp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
