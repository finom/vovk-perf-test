import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilx")
export default class IlxController {
  @operation({
    summary: "Get Ilx",
  })
  @get()
  static getIlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilx",
  })
  @post("{id}")
  static createIlx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
