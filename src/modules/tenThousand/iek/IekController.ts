import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iek")
export default class IekController {
  @operation({
    summary: "Get Iek",
  })
  @get()
  static getIek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iek",
  })
  @post("{id}")
  static createIek = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
