import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ln")
export default class LnController {
  @operation({
    summary: "Get Ln",
  })
  @get()
  static getLn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ln",
  })
  @post("{id}")
  static createLn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
