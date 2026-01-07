import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byu")
export default class ByuController {
  @operation({
    summary: "Get Byu",
  })
  @get()
  static getByu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byu",
  })
  @post("{id}")
  static createByu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
