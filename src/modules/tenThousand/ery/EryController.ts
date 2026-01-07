import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ery")
export default class EryController {
  @operation({
    summary: "Get Ery",
  })
  @get()
  static getEry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ery",
  })
  @post("{id}")
  static createEry = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
