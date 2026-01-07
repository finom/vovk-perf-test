import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iax")
export default class IaxController {
  @operation({
    summary: "Get Iax",
  })
  @get()
  static getIax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iax",
  })
  @post("{id}")
  static createIax = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
