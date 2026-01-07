import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjd")
export default class CjdController {
  @operation({
    summary: "Get Cjd",
  })
  @get()
  static getCjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjd",
  })
  @post("{id}")
  static createCjd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
