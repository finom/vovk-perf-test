import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iny")
export default class InyController {
  @operation({
    summary: "Get Iny",
  })
  @get()
  static getIny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iny",
  })
  @post("{id}")
  static createIny = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
