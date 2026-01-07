import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idb")
export default class IdbController {
  @operation({
    summary: "Get Idb",
  })
  @get()
  static getIdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idb",
  })
  @post("{id}")
  static createIdb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
