import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjy")
export default class CjyController {
  @operation({
    summary: "Get Cjy",
  })
  @get()
  static getCjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjy",
  })
  @post("{id}")
  static createCjy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
