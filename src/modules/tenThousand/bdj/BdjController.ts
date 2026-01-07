import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdj")
export default class BdjController {
  @operation({
    summary: "Get Bdj",
  })
  @get()
  static getBdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdj",
  })
  @post("{id}")
  static createBdj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
