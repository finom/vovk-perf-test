import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhn")
export default class LhnController {
  @operation({
    summary: "Get Lhn",
  })
  @get()
  static getLhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhn",
  })
  @post("{id}")
  static createLhn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
