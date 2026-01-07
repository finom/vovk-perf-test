import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkl")
export default class BklController {
  @operation({
    summary: "Get Bkl",
  })
  @get()
  static getBkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkl",
  })
  @post("{id}")
  static createBkl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
