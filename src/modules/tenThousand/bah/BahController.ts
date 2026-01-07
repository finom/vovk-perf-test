import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bah")
export default class BahController {
  @operation({
    summary: "Get Bah",
  })
  @get()
  static getBah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bah",
  })
  @post("{id}")
  static createBah = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
