import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjf")
export default class CjfController {
  @operation({
    summary: "Get Cjf",
  })
  @get()
  static getCjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjf",
  })
  @post("{id}")
  static createCjf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
