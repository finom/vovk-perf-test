import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acp")
export default class AcpController {
  @operation({
    summary: "Get Acp",
  })
  @get()
  static getAcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acp",
  })
  @post("{id}")
  static createAcp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
