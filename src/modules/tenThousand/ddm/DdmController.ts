import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddm")
export default class DdmController {
  @operation({
    summary: "Get Ddm",
  })
  @get()
  static getDdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddm",
  })
  @post("{id}")
  static createDdm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
