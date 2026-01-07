import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwj")
export default class LwjController {
  @operation({
    summary: "Get Lwj",
  })
  @get()
  static getLwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwj",
  })
  @post("{id}")
  static createLwj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
