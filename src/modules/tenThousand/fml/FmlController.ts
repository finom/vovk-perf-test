import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fml")
export default class FmlController {
  @operation({
    summary: "Get Fml",
  })
  @get()
  static getFml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fml",
  })
  @post("{id}")
  static createFml = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
