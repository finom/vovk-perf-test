import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfh")
export default class BfhController {
  @operation({
    summary: "Get Bfh",
  })
  @get()
  static getBfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfh",
  })
  @post("{id}")
  static createBfh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
