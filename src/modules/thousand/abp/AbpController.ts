import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abp")
export default class AbpController {
  @operation({
    summary: "Get Abp",
  })
  @get()
  static getAbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abp",
  })
  @post("{id}")
  static createAbp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
