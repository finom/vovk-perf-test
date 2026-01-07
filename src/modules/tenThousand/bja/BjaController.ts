import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bja")
export default class BjaController {
  @operation({
    summary: "Get Bja",
  })
  @get()
  static getBja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bja",
  })
  @post("{id}")
  static createBja = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
