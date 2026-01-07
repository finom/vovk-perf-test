import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwt")
export default class LwtController {
  @operation({
    summary: "Get Lwt",
  })
  @get()
  static getLwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwt",
  })
  @post("{id}")
  static createLwt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
