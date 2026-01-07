import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aiv")
export default class AivController {
  @operation({
    summary: "Get Aiv",
  })
  @get()
  static getAiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aiv",
  })
  @post("{id}")
  static createAiv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
