import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipy")
export default class IpyController {
  @operation({
    summary: "Get Ipy",
  })
  @get()
  static getIpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipy",
  })
  @post("{id}")
  static createIpy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
