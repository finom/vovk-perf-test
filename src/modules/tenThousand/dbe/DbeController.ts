import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbe")
export default class DbeController {
  @operation({
    summary: "Get Dbe",
  })
  @get()
  static getDbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbe",
  })
  @post("{id}")
  static createDbe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
