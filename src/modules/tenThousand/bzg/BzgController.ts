import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzg")
export default class BzgController {
  @operation({
    summary: "Get Bzg",
  })
  @get()
  static getBzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzg",
  })
  @post("{id}")
  static createBzg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
