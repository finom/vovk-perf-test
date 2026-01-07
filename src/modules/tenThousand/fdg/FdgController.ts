import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdg")
export default class FdgController {
  @operation({
    summary: "Get Fdg",
  })
  @get()
  static getFdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdg",
  })
  @post("{id}")
  static createFdg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
