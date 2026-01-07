import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egs")
export default class EgsController {
  @operation({
    summary: "Get Egs",
  })
  @get()
  static getEgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egs",
  })
  @post("{id}")
  static createEgs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
