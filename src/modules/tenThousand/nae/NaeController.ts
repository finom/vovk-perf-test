import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nae")
export default class NaeController {
  @operation({
    summary: "Get Nae",
  })
  @get()
  static getNae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nae",
  })
  @post("{id}")
  static createNae = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
