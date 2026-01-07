import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izu")
export default class IzuController {
  @operation({
    summary: "Get Izu",
  })
  @get()
  static getIzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izu",
  })
  @post("{id}")
  static createIzu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
