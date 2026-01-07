import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grn")
export default class GrnController {
  @operation({
    summary: "Get Grn",
  })
  @get()
  static getGrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grn",
  })
  @post("{id}")
  static createGrn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
