import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ico")
export default class IcoController {
  @operation({
    summary: "Get Ico",
  })
  @get()
  static getIco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ico",
  })
  @post("{id}")
  static createIco = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
