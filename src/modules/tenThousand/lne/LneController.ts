import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lne")
export default class LneController {
  @operation({
    summary: "Get Lne",
  })
  @get()
  static getLne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lne",
  })
  @post("{id}")
  static createLne = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
