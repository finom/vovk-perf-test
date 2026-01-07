import { procedure, prefix, get, post, operation } from "vovk";

@prefix("let")
export default class LetController {
  @operation({
    summary: "Get Let",
  })
  @get()
  static getLet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Let",
  })
  @post("{id}")
  static createLet = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
