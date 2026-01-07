import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsx")
export default class FsxController {
  @operation({
    summary: "Get Fsx",
  })
  @get()
  static getFsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsx",
  })
  @post("{id}")
  static createFsx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
