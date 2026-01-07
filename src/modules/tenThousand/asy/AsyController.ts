import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asy")
export default class AsyController {
  @operation({
    summary: "Get Asy",
  })
  @get()
  static getAsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asy",
  })
  @post("{id}")
  static createAsy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
