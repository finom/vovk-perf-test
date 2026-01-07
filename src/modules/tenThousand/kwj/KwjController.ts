import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwj")
export default class KwjController {
  @operation({
    summary: "Get Kwj",
  })
  @get()
  static getKwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwj",
  })
  @post("{id}")
  static createKwj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
