import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ild")
export default class IldController {
  @operation({
    summary: "Get Ild",
  })
  @get()
  static getIld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ild",
  })
  @post("{id}")
  static createIld = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
