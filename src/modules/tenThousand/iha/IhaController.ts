import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iha")
export default class IhaController {
  @operation({
    summary: "Get Iha",
  })
  @get()
  static getIha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iha",
  })
  @post("{id}")
  static createIha = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
