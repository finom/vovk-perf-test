import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioe")
export default class IoeController {
  @operation({
    summary: "Get Ioe",
  })
  @get()
  static getIoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioe",
  })
  @post("{id}")
  static createIoe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
