import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ips")
export default class IpsController {
  @operation({
    summary: "Get Ips",
  })
  @get()
  static getIps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ips",
  })
  @post("{id}")
  static createIps = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
