import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzq")
export default class BzqController {
  @operation({
    summary: "Get Bzq",
  })
  @get()
  static getBzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzq",
  })
  @post("{id}")
  static createBzq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
