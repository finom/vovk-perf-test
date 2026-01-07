import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbf")
export default class GbfController {
  @operation({
    summary: "Get Gbf",
  })
  @get()
  static getGbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbf",
  })
  @post("{id}")
  static createGbf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
