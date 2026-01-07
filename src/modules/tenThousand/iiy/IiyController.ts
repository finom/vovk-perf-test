import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iiy")
export default class IiyController {
  @operation({
    summary: "Get Iiy",
  })
  @get()
  static getIiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iiy",
  })
  @post("{id}")
  static createIiy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
