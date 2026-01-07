import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmu")
export default class CmuController {
  @operation({
    summary: "Get Cmu",
  })
  @get()
  static getCmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmu",
  })
  @post("{id}")
  static createCmu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
