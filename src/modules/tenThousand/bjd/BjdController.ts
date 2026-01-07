import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjd")
export default class BjdController {
  @operation({
    summary: "Get Bjd",
  })
  @get()
  static getBjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjd",
  })
  @post("{id}")
  static createBjd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
