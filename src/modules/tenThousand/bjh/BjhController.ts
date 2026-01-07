import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjh")
export default class BjhController {
  @operation({
    summary: "Get Bjh",
  })
  @get()
  static getBjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjh",
  })
  @post("{id}")
  static createBjh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
