import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ija")
export default class IjaController {
  @operation({
    summary: "Get Ija",
  })
  @get()
  static getIja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ija",
  })
  @post("{id}")
  static createIja = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
