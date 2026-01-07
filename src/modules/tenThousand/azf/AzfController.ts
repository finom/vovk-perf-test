import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azf")
export default class AzfController {
  @operation({
    summary: "Get Azf",
  })
  @get()
  static getAzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azf",
  })
  @post("{id}")
  static createAzf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
