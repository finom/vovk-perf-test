import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehq")
export default class EhqController {
  @operation({
    summary: "Get Ehq",
  })
  @get()
  static getEhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehq",
  })
  @post("{id}")
  static createEhq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
