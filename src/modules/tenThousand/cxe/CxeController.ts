import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxe")
export default class CxeController {
  @operation({
    summary: "Get Cxe",
  })
  @get()
  static getCxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxe",
  })
  @post("{id}")
  static createCxe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
