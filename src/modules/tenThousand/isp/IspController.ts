import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isp")
export default class IspController {
  @operation({
    summary: "Get Isp",
  })
  @get()
  static getIsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isp",
  })
  @post("{id}")
  static createIsp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
