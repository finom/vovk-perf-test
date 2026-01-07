import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljo")
export default class LjoController {
  @operation({
    summary: "Get Ljo",
  })
  @get()
  static getLjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljo",
  })
  @post("{id}")
  static createLjo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
