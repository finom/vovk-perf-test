import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipj")
export default class IpjController {
  @operation({
    summary: "Get Ipj",
  })
  @get()
  static getIpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipj",
  })
  @post("{id}")
  static createIpj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
