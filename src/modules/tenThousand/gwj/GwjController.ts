import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwj")
export default class GwjController {
  @operation({
    summary: "Get Gwj",
  })
  @get()
  static getGwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwj",
  })
  @post("{id}")
  static createGwj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
