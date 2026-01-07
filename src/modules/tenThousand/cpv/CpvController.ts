import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpv")
export default class CpvController {
  @operation({
    summary: "Get Cpv",
  })
  @get()
  static getCpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpv",
  })
  @post("{id}")
  static createCpv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
