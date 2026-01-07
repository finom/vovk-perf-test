import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipd")
export default class IpdController {
  @operation({
    summary: "Get Ipd",
  })
  @get()
  static getIpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipd",
  })
  @post("{id}")
  static createIpd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
