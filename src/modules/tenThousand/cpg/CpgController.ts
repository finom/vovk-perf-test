import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpg")
export default class CpgController {
  @operation({
    summary: "Get Cpg",
  })
  @get()
  static getCpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpg",
  })
  @post("{id}")
  static createCpg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
