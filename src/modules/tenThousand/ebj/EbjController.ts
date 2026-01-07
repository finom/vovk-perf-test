import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebj")
export default class EbjController {
  @operation({
    summary: "Get Ebj",
  })
  @get()
  static getEbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebj",
  })
  @post("{id}")
  static createEbj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
