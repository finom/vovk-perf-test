import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwu")
export default class LwuController {
  @operation({
    summary: "Get Lwu",
  })
  @get()
  static getLwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwu",
  })
  @post("{id}")
  static createLwu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
