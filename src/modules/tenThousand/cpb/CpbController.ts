import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpb")
export default class CpbController {
  @operation({
    summary: "Get Cpb",
  })
  @get()
  static getCpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpb",
  })
  @post("{id}")
  static createCpb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
