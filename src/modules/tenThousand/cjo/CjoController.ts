import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjo")
export default class CjoController {
  @operation({
    summary: "Get Cjo",
  })
  @get()
  static getCjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjo",
  })
  @post("{id}")
  static createCjo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
