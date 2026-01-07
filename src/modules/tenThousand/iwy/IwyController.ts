import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwy")
export default class IwyController {
  @operation({
    summary: "Get Iwy",
  })
  @get()
  static getIwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwy",
  })
  @post("{id}")
  static createIwy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
