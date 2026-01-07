import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfc")
export default class GfcController {
  @operation({
    summary: "Get Gfc",
  })
  @get()
  static getGfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfc",
  })
  @post("{id}")
  static createGfc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
