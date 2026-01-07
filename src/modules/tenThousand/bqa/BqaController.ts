import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqa")
export default class BqaController {
  @operation({
    summary: "Get Bqa",
  })
  @get()
  static getBqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqa",
  })
  @post("{id}")
  static createBqa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
