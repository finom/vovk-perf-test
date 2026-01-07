import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icp")
export default class IcpController {
  @operation({
    summary: "Get Icp",
  })
  @get()
  static getIcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icp",
  })
  @post("{id}")
  static createIcp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
