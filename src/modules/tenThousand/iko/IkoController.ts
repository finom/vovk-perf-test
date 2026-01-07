import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iko")
export default class IkoController {
  @operation({
    summary: "Get Iko",
  })
  @get()
  static getIko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iko",
  })
  @post("{id}")
  static createIko = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
