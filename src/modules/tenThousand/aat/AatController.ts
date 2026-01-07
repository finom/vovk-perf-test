import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aat")
export default class AatController {
  @operation({
    summary: "Get Aat",
  })
  @get()
  static getAat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aat",
  })
  @post("{id}")
  static createAat = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
