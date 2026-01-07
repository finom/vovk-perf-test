import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igo")
export default class IgoController {
  @operation({
    summary: "Get Igo",
  })
  @get()
  static getIgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igo",
  })
  @post("{id}")
  static createIgo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
