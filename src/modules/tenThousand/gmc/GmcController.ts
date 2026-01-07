import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmc")
export default class GmcController {
  @operation({
    summary: "Get Gmc",
  })
  @get()
  static getGmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmc",
  })
  @post("{id}")
  static createGmc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
