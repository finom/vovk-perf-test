import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzr")
export default class BzrController {
  @operation({
    summary: "Get Bzr",
  })
  @get()
  static getBzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzr",
  })
  @post("{id}")
  static createBzr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
