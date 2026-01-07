import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bes")
export default class BesController {
  @operation({
    summary: "Get Bes",
  })
  @get()
  static getBes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bes",
  })
  @post("{id}")
  static createBes = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
