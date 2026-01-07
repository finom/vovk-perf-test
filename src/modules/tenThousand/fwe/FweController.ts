import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwe")
export default class FweController {
  @operation({
    summary: "Get Fwe",
  })
  @get()
  static getFwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwe",
  })
  @post("{id}")
  static createFwe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
