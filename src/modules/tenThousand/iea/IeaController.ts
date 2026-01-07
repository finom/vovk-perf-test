import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iea")
export default class IeaController {
  @operation({
    summary: "Get Iea",
  })
  @get()
  static getIea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iea",
  })
  @post("{id}")
  static createIea = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
