import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erw")
export default class ErwController {
  @operation({
    summary: "Get Erw",
  })
  @get()
  static getErw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erw",
  })
  @post("{id}")
  static createErw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
