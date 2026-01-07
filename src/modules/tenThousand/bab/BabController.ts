import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bab")
export default class BabController {
  @operation({
    summary: "Get Bab",
  })
  @get()
  static getBab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bab",
  })
  @post("{id}")
  static createBab = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
