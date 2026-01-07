import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cru")
export default class CruController {
  @operation({
    summary: "Get Cru",
  })
  @get()
  static getCru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cru",
  })
  @post("{id}")
  static createCru = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
