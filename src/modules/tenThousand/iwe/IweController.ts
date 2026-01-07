import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwe")
export default class IweController {
  @operation({
    summary: "Get Iwe",
  })
  @get()
  static getIwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwe",
  })
  @post("{id}")
  static createIwe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
