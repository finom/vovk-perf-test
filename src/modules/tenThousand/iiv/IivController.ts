import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iiv")
export default class IivController {
  @operation({
    summary: "Get Iiv",
  })
  @get()
  static getIiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iiv",
  })
  @post("{id}")
  static createIiv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
