import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjq")
export default class CjqController {
  @operation({
    summary: "Get Cjq",
  })
  @get()
  static getCjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjq",
  })
  @post("{id}")
  static createCjq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
