import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzp")
export default class BzpController {
  @operation({
    summary: "Get Bzp",
  })
  @get()
  static getBzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzp",
  })
  @post("{id}")
  static createBzp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
