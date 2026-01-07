import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cs")
export default class CsController {
  @operation({
    summary: "Get Cs",
  })
  @get()
  static getCs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cs",
  })
  @post("{id}")
  static createCs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
