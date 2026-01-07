import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ine")
export default class IneController {
  @operation({
    summary: "Get Ine",
  })
  @get()
  static getIne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ine",
  })
  @post("{id}")
  static createIne = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
