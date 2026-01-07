import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgo")
export default class DgoController {
  @operation({
    summary: "Get Dgo",
  })
  @get()
  static getDgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgo",
  })
  @post("{id}")
  static createDgo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
