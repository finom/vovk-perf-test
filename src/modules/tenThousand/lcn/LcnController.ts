import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcn")
export default class LcnController {
  @operation({
    summary: "Get Lcn",
  })
  @get()
  static getLcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcn",
  })
  @post("{id}")
  static createLcn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
