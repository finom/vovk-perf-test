import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iiq")
export default class IiqController {
  @operation({
    summary: "Get Iiq",
  })
  @get()
  static getIiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iiq",
  })
  @post("{id}")
  static createIiq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
