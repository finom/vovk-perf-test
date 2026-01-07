import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjr")
export default class BjrController {
  @operation({
    summary: "Get Bjr",
  })
  @get()
  static getBjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjr",
  })
  @post("{id}")
  static createBjr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
