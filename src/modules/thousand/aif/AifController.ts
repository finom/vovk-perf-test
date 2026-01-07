import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aif")
export default class AifController {
  @operation({
    summary: "Get Aif",
  })
  @get()
  static getAif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aif",
  })
  @post("{id}")
  static createAif = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
