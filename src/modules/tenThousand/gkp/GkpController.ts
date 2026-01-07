import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkp")
export default class GkpController {
  @operation({
    summary: "Get Gkp",
  })
  @get()
  static getGkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkp",
  })
  @post("{id}")
  static createGkp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
