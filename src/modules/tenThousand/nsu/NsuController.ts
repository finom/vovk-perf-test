import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsu")
export default class NsuController {
  @operation({
    summary: "Get Nsu",
  })
  @get()
  static getNsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsu",
  })
  @post("{id}")
  static createNsu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
