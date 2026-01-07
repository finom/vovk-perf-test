import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibl")
export default class IblController {
  @operation({
    summary: "Get Ibl",
  })
  @get()
  static getIbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibl",
  })
  @post("{id}")
  static createIbl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
