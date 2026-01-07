import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idu")
export default class IduController {
  @operation({
    summary: "Get Idu",
  })
  @get()
  static getIdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idu",
  })
  @post("{id}")
  static createIdu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
