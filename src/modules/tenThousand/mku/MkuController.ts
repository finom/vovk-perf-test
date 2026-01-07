import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mku")
export default class MkuController {
  @operation({
    summary: "Get Mku",
  })
  @get()
  static getMku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mku",
  })
  @post("{id}")
  static createMku = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
