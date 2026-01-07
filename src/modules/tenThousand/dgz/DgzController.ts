import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgz")
export default class DgzController {
  @operation({
    summary: "Get Dgz",
  })
  @get()
  static getDgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgz",
  })
  @post("{id}")
  static createDgz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
