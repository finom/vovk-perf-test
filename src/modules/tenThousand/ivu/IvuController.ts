import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivu")
export default class IvuController {
  @operation({
    summary: "Get Ivu",
  })
  @get()
  static getIvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivu",
  })
  @post("{id}")
  static createIvu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
