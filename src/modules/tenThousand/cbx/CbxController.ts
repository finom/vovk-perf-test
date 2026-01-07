import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbx")
export default class CbxController {
  @operation({
    summary: "Get Cbx",
  })
  @get()
  static getCbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbx",
  })
  @post("{id}")
  static createCbx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
