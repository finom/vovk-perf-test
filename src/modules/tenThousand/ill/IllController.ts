import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ill")
export default class IllController {
  @operation({
    summary: "Get Ill",
  })
  @get()
  static getIll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ill",
  })
  @post("{id}")
  static createIll = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
