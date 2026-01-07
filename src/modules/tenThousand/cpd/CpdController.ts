import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpd")
export default class CpdController {
  @operation({
    summary: "Get Cpd",
  })
  @get()
  static getCpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpd",
  })
  @post("{id}")
  static createCpd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
