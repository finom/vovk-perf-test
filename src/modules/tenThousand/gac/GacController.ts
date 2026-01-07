import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gac")
export default class GacController {
  @operation({
    summary: "Get Gac",
  })
  @get()
  static getGac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gac",
  })
  @post("{id}")
  static createGac = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
