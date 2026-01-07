import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcp")
export default class HcpController {
  @operation({
    summary: "Get Hcp",
  })
  @get()
  static getHcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcp",
  })
  @post("{id}")
  static createHcp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
