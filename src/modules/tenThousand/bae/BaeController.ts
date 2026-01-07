import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bae")
export default class BaeController {
  @operation({
    summary: "Get Bae",
  })
  @get()
  static getBae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bae",
  })
  @post("{id}")
  static createBae = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
