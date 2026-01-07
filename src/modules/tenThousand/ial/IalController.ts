import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ial")
export default class IalController {
  @operation({
    summary: "Get Ial",
  })
  @get()
  static getIal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ial",
  })
  @post("{id}")
  static createIal = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
