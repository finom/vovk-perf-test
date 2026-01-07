import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bia")
export default class BiaController {
  @operation({
    summary: "Get Bia",
  })
  @get()
  static getBia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bia",
  })
  @post("{id}")
  static createBia = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
