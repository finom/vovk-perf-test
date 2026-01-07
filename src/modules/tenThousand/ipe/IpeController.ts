import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipe")
export default class IpeController {
  @operation({
    summary: "Get Ipe",
  })
  @get()
  static getIpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipe",
  })
  @post("{id}")
  static createIpe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
