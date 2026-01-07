import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlu")
export default class MluController {
  @operation({
    summary: "Get Mlu",
  })
  @get()
  static getMlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlu",
  })
  @post("{id}")
  static createMlu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
