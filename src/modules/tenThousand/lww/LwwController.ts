import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lww")
export default class LwwController {
  @operation({
    summary: "Get Lww",
  })
  @get()
  static getLww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lww",
  })
  @post("{id}")
  static createLww = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
