import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsq")
export default class GsqController {
  @operation({
    summary: "Get Gsq",
  })
  @get()
  static getGsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsq",
  })
  @post("{id}")
  static createGsq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
