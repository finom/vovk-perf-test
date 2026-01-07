import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isk")
export default class IskController {
  @operation({
    summary: "Get Isk",
  })
  @get()
  static getIsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isk",
  })
  @post("{id}")
  static createIsk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
