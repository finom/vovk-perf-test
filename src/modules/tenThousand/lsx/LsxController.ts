import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsx")
export default class LsxController {
  @operation({
    summary: "Get Lsx",
  })
  @get()
  static getLsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsx",
  })
  @post("{id}")
  static createLsx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
