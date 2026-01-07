import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iez")
export default class IezController {
  @operation({
    summary: "Get Iez",
  })
  @get()
  static getIez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iez",
  })
  @post("{id}")
  static createIez = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
