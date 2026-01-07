import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwn")
export default class LwnController {
  @operation({
    summary: "Get Lwn",
  })
  @get()
  static getLwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwn",
  })
  @post("{id}")
  static createLwn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
