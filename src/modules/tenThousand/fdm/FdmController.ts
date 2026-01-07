import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdm")
export default class FdmController {
  @operation({
    summary: "Get Fdm",
  })
  @get()
  static getFdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdm",
  })
  @post("{id}")
  static createFdm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
