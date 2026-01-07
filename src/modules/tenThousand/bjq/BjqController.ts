import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjq")
export default class BjqController {
  @operation({
    summary: "Get Bjq",
  })
  @get()
  static getBjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjq",
  })
  @post("{id}")
  static createBjq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
