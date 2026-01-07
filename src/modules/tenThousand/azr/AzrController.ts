import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azr")
export default class AzrController {
  @operation({
    summary: "Get Azr",
  })
  @get()
  static getAzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azr",
  })
  @post("{id}")
  static createAzr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
