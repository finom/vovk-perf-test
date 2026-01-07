import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eml")
export default class EmlController {
  @operation({
    summary: "Get Eml",
  })
  @get()
  static getEml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eml",
  })
  @post("{id}")
  static createEml = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
