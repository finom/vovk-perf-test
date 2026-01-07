import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luy")
export default class LuyController {
  @operation({
    summary: "Get Luy",
  })
  @get()
  static getLuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luy",
  })
  @post("{id}")
  static createLuy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
