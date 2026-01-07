import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uy")
export default class UyController {
  @operation({
    summary: "Get Uy",
  })
  @get()
  static getUy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uy",
  })
  @post("{id}")
  static createUy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
