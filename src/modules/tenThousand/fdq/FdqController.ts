import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdq")
export default class FdqController {
  @operation({
    summary: "Get Fdq",
  })
  @get()
  static getFdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdq",
  })
  @post("{id}")
  static createFdq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
