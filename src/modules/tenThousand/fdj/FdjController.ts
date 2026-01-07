import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdj")
export default class FdjController {
  @operation({
    summary: "Get Fdj",
  })
  @get()
  static getFdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdj",
  })
  @post("{id}")
  static createFdj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
