import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nks")
export default class NksController {
  @operation({
    summary: "Get Nks",
  })
  @get()
  static getNks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nks",
  })
  @post("{id}")
  static createNks = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
