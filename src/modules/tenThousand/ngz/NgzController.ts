import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngz")
export default class NgzController {
  @operation({
    summary: "Get Ngz",
  })
  @get()
  static getNgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngz",
  })
  @post("{id}")
  static createNgz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
