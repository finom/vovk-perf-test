import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwe")
export default class MweController {
  @operation({
    summary: "Get Mwe",
  })
  @get()
  static getMwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwe",
  })
  @post("{id}")
  static createMwe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
