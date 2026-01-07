import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjx")
export default class CjxController {
  @operation({
    summary: "Get Cjx",
  })
  @get()
  static getCjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjx",
  })
  @post("{id}")
  static createCjx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
