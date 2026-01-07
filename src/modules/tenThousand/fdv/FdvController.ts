import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdv")
export default class FdvController {
  @operation({
    summary: "Get Fdv",
  })
  @get()
  static getFdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdv",
  })
  @post("{id}")
  static createFdv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
