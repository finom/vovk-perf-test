import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjn")
export default class BjnController {
  @operation({
    summary: "Get Bjn",
  })
  @get()
  static getBjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjn",
  })
  @post("{id}")
  static createBjn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
