import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezw")
export default class EzwController {
  @operation({
    summary: "Get Ezw",
  })
  @get()
  static getEzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezw",
  })
  @post("{id}")
  static createEzw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
