import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyg")
export default class CygController {
  @operation({
    summary: "Get Cyg",
  })
  @get()
  static getCyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyg",
  })
  @post("{id}")
  static createCyg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
