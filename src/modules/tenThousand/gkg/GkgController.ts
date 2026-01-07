import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkg")
export default class GkgController {
  @operation({
    summary: "Get Gkg",
  })
  @get()
  static getGkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkg",
  })
  @post("{id}")
  static createGkg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
