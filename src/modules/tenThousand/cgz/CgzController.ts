import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgz")
export default class CgzController {
  @operation({
    summary: "Get Cgz",
  })
  @get()
  static getCgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgz",
  })
  @post("{id}")
  static createCgz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
