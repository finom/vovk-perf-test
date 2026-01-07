import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cix")
export default class CixController {
  @operation({
    summary: "Get Cix",
  })
  @get()
  static getCix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cix",
  })
  @post("{id}")
  static createCix = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
