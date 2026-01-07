import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ije")
export default class IjeController {
  @operation({
    summary: "Get Ije",
  })
  @get()
  static getIje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ije",
  })
  @post("{id}")
  static createIje = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
