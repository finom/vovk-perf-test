import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfj")
export default class BfjController {
  @operation({
    summary: "Get Bfj",
  })
  @get()
  static getBfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfj",
  })
  @post("{id}")
  static createBfj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
