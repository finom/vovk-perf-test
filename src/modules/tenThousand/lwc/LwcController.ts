import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwc")
export default class LwcController {
  @operation({
    summary: "Get Lwc",
  })
  @get()
  static getLwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwc",
  })
  @post("{id}")
  static createLwc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
