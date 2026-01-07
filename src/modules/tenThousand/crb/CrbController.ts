import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crb")
export default class CrbController {
  @operation({
    summary: "Get Crb",
  })
  @get()
  static getCrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crb",
  })
  @post("{id}")
  static createCrb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
