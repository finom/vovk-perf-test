import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azq")
export default class AzqController {
  @operation({
    summary: "Get Azq",
  })
  @get()
  static getAzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azq",
  })
  @post("{id}")
  static createAzq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
