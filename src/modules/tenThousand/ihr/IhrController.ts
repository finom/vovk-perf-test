import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihr")
export default class IhrController {
  @operation({
    summary: "Get Ihr",
  })
  @get()
  static getIhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihr",
  })
  @post("{id}")
  static createIhr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
