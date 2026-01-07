import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liw")
export default class LiwController {
  @operation({
    summary: "Get Liw",
  })
  @get()
  static getLiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Liw",
  })
  @post("{id}")
  static createLiw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
