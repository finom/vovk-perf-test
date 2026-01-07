import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bie")
export default class BieController {
  @operation({
    summary: "Get Bie",
  })
  @get()
  static getBie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bie",
  })
  @post("{id}")
  static createBie = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
