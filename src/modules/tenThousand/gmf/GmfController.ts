import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmf")
export default class GmfController {
  @operation({
    summary: "Get Gmf",
  })
  @get()
  static getGmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmf",
  })
  @post("{id}")
  static createGmf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
