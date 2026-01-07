import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bew")
export default class BewController {
  @operation({
    summary: "Get Bew",
  })
  @get()
  static getBew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bew",
  })
  @post("{id}")
  static createBew = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
