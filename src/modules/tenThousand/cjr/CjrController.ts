import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjr")
export default class CjrController {
  @operation({
    summary: "Get Cjr",
  })
  @get()
  static getCjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjr",
  })
  @post("{id}")
  static createCjr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
