import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpa")
export default class BpaController {
  @operation({
    summary: "Get Bpa",
  })
  @get()
  static getBpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpa",
  })
  @post("{id}")
  static createBpa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
