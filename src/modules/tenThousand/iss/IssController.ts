import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iss")
export default class IssController {
  @operation({
    summary: "Get Iss",
  })
  @get()
  static getIss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iss",
  })
  @post("{id}")
  static createIss = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
