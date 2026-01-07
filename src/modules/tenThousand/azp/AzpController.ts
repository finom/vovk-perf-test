import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azp")
export default class AzpController {
  @operation({
    summary: "Get Azp",
  })
  @get()
  static getAzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azp",
  })
  @post("{id}")
  static createAzp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
