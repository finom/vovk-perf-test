import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjx")
export default class BjxController {
  @operation({
    summary: "Get Bjx",
  })
  @get()
  static getBjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjx",
  })
  @post("{id}")
  static createBjx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
