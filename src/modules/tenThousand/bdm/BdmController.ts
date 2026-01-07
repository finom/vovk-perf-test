import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdm")
export default class BdmController {
  @operation({
    summary: "Get Bdm",
  })
  @get()
  static getBdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdm",
  })
  @post("{id}")
  static createBdm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
