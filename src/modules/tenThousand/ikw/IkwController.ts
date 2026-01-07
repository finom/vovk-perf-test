import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikw")
export default class IkwController {
  @operation({
    summary: "Get Ikw",
  })
  @get()
  static getIkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikw",
  })
  @post("{id}")
  static createIkw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
