import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzf")
export default class BzfController {
  @operation({
    summary: "Get Bzf",
  })
  @get()
  static getBzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzf",
  })
  @post("{id}")
  static createBzf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
