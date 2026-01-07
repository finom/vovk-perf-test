import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moj")
export default class MojController {
  @operation({
    summary: "Get Moj",
  })
  @get()
  static getMoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moj",
  })
  @post("{id}")
  static createMoj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
