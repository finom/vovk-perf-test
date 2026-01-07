import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azw")
export default class AzwController {
  @operation({
    summary: "Get Azw",
  })
  @get()
  static getAzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azw",
  })
  @post("{id}")
  static createAzw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
