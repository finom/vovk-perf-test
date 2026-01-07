import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cju")
export default class CjuController {
  @operation({
    summary: "Get Cju",
  })
  @get()
  static getCju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cju",
  })
  @post("{id}")
  static createCju = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
