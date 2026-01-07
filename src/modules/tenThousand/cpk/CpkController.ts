import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpk")
export default class CpkController {
  @operation({
    summary: "Get Cpk",
  })
  @get()
  static getCpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpk",
  })
  @post("{id}")
  static createCpk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
