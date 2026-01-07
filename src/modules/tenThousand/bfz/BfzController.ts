import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfz")
export default class BfzController {
  @operation({
    summary: "Get Bfz",
  })
  @get()
  static getBfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfz",
  })
  @post("{id}")
  static createBfz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
