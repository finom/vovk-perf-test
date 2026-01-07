import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eft")
export default class EftController {
  @operation({
    summary: "Get Eft",
  })
  @get()
  static getEft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eft",
  })
  @post("{id}")
  static createEft = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
