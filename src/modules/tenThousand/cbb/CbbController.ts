import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbb")
export default class CbbController {
  @operation({
    summary: "Get Cbb",
  })
  @get()
  static getCbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbb",
  })
  @post("{id}")
  static createCbb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
