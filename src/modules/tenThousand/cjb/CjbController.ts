import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjb")
export default class CjbController {
  @operation({
    summary: "Get Cjb",
  })
  @get()
  static getCjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjb",
  })
  @post("{id}")
  static createCjb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
