import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afq")
export default class AfqController {
  @operation({
    summary: "Get Afq",
  })
  @get()
  static getAfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afq",
  })
  @post("{id}")
  static createAfq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
