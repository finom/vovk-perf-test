import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azg")
export default class AzgController {
  @operation({
    summary: "Get Azg",
  })
  @get()
  static getAzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azg",
  })
  @post("{id}")
  static createAzg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
