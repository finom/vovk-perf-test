import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjh")
export default class CjhController {
  @operation({
    summary: "Get Cjh",
  })
  @get()
  static getCjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjh",
  })
  @post("{id}")
  static createCjh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
