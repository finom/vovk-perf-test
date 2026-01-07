import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brg")
export default class BrgController {
  @operation({
    summary: "Get Brg",
  })
  @get()
  static getBrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brg",
  })
  @post("{id}")
  static createBrg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
