import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjc")
export default class CjcController {
  @operation({
    summary: "Get Cjc",
  })
  @get()
  static getCjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjc",
  })
  @post("{id}")
  static createCjc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
