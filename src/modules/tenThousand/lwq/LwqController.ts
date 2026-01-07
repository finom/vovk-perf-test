import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwq")
export default class LwqController {
  @operation({
    summary: "Get Lwq",
  })
  @get()
  static getLwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwq",
  })
  @post("{id}")
  static createLwq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
