import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amr")
export default class AmrController {
  @operation({
    summary: "Get Amr",
  })
  @get()
  static getAmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amr",
  })
  @post("{id}")
  static createAmr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
