import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecp")
export default class EcpController {
  @operation({
    summary: "Get Ecp",
  })
  @get()
  static getEcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecp",
  })
  @post("{id}")
  static createEcp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
