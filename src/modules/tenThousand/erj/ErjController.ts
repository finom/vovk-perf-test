import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erj")
export default class ErjController {
  @operation({
    summary: "Get Erj",
  })
  @get()
  static getErj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erj",
  })
  @post("{id}")
  static createErj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
