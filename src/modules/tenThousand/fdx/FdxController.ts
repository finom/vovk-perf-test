import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdx")
export default class FdxController {
  @operation({
    summary: "Get Fdx",
  })
  @get()
  static getFdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdx",
  })
  @post("{id}")
  static createFdx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
