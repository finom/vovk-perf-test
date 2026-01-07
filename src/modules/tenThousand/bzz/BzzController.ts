import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzz")
export default class BzzController {
  @operation({
    summary: "Get Bzz",
  })
  @get()
  static getBzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzz",
  })
  @post("{id}")
  static createBzz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
