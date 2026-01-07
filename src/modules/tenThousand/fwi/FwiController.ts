import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwi")
export default class FwiController {
  @operation({
    summary: "Get Fwi",
  })
  @get()
  static getFwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwi",
  })
  @post("{id}")
  static createFwi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
